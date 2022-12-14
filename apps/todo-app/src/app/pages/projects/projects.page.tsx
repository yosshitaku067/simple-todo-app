import dayjs from 'dayjs';
import React, { useContext } from 'react';
import Encoding from 'encoding-japanese';
import Button from '../../components/buttons/button.component';
import FormInputWithButton from '../../components/form/form-input-with-button.component';
import HeadingPrimary from '../../components/heading/heading-primary.component';
import ModalEditOneText from '../../components/modal/modal-edit-one-text.component';
import ModalEditTodoDetail from '../../components/modal/modal-edit-todo-detail.component';
import { modalContext } from '../../components/modal/modal.context';
import ProjectCard from '../../components/project-card.component';
import {
  useAllProjectsQuery,
  useCreateProjectMutation,
  useUpdateProjectNameMutation,
  useUpdateProjectDescriptionMutation,
  useCreateTodoMutation,
  useUpdateTodoNameMutation,
  useUpdateTodoDetailMutation,
  Status,
  useCreateActivityMutation,
  useUpdateActivityMutation,
} from '../../graphql/generated/graphql';
import { DAYJS_FORMAT } from '../../helper/dayjs-format';
import { allProjectToProjectModel, Project, Todo } from '../../models';

const ProjectsPage: React.FC = () => {
  const { openModal, closeModal } = useContext(modalContext);

  const { data: response, refetch: refetchAllProject } = useAllProjectsQuery({
    fetchPolicy: 'cache-first',
  });
  const [createProjectMutation] = useCreateProjectMutation();

  const [updateProjectNameMutation] = useUpdateProjectNameMutation();
  const [updateProjectDescriptionMutation] =
    useUpdateProjectDescriptionMutation();
  const [createTodoMutation] = useCreateTodoMutation();
  const [updateTodoNameMutation] = useUpdateTodoNameMutation();
  const [updateTodoDetailMutation] = useUpdateTodoDetailMutation();
  const [createActivityMutation] = useCreateActivityMutation();
  const [updateActivityMutation] = useUpdateActivityMutation();

  const projects = allProjectToProjectModel(response);

  const handleClcikProjectNameEdit = (project: Project) => {
    const modalId = 'project-name-edit-modal';
    openModal(
      modalId,
      <ModalEditOneText
        label="Project Name"
        name={project.name}
        onSave={async (name) => {
          await updateProjectNameMutation({
            variables: {
              id: project.id,
              name: name,
            },
          });
          await refetchAllProject();
          closeModal(modalId);
        }}
        onClose={() => {
          closeModal(modalId);
        }}
      />
    );
  };

  const handleClickProjectDescriptionEdit = (project: Project) => {
    const modalId = 'project-description-edit-modal';
    openModal(
      modalId,
      <ModalEditOneText
        label="Project Overview"
        name={project.description}
        onSave={async (description) => {
          await updateProjectDescriptionMutation({
            variables: {
              id: project.id,
              description,
            },
          });

          closeModal(modalId);
        }}
        onClose={() => {
          closeModal(modalId);
        }}
      />
    );
  };

  const handleClickTodoNameEdit = (projectId: number, todo: Todo) => {
    const modalId = 'todo-name-edit-modal';
    openModal(
      modalId,
      <ModalEditOneText
        label="Todo Name"
        name={todo.name}
        onSave={async (name) => {
          await updateTodoNameMutation({
            variables: {
              id: todo.id,
              name,
            },
          });

          await refetchAllProject();

          closeModal(modalId);
        }}
        onClose={() => {
          closeModal(modalId);
        }}
      />
    );
  };

  const handleClickTodoDetailEdit = (projectId: number, todo: Todo) => {
    const modalId = 'todo-detail-edit-modal';
    openModal(
      modalId,
      <ModalEditTodoDetail
        progress={todo.progress}
        status={todo.status}
        onSave={async (detail) => {
          let status: Status;

          switch (detail.status) {
            case 'CLOSED': {
              status = Status.Closed;
              break;
            }
            case 'COMPLETED': {
              status = Status.Completed;
              break;
            }
            case 'OPEN': {
              status = Status.Open;
              break;
            }
          }

          await updateTodoDetailMutation({
            variables: {
              id: todo.id,
              progress: detail.progress,
              status,
            },
          });

          await refetchAllProject();

          closeModal(modalId);
        }}
        onClose={() => {
          closeModal(modalId);
        }}
      />
    );
  };

  const handleAddNewTodo = async (projectId: number, name: string) => {
    await createTodoMutation({
      variables: {
        name,
        projectId,
      },
    });

    await refetchAllProject();
  };

  const handleAddNewProject = async (value: string) => {
    await createProjectMutation({
      variables: {
        name: value,
      },
    });

    await refetchAllProject();
  };

  const handleAddNewActivity = async (todoId: number, text: string) => {
    await createActivityMutation({
      variables: {
        todoId,
        text,
      },
    });

    await refetchAllProject();
  };

  const handleEditActivity = (id: number, text: string) => {
    const modalId = 'activity-edit-modal';
    openModal(
      modalId,
      <ModalEditOneText
        label="Activity"
        name={text}
        onSave={async (text) => {
          await updateActivityMutation({
            variables: {
              id,
              text,
            },
          });

          await refetchAllProject();

          closeModal(modalId);
        }}
        onClose={() => {
          closeModal(modalId);
        }}
      />
    );
  };

  const handleOnClickExportMarkdown = () => {
    const now = dayjs().format(DAYJS_FORMAT);
    const textLines: string[] = ['# All Projects', now, ''];

    for (const project of projects) {
      textLines.push(`## ${project.name}`);
      textLines.push(`?????????: ${project.createdAt}`);
      textLines.push(`?????????: ${project.updatedAt}`);

      if (project.todos.length === 0) {
        textLines.push('TODO?????????????????????????????????');
      }

      for (const todo of project.todos) {
        textLines.push(`### ${todo.name}`);
        textLines.push(`?????????: ${todo.createdAt}`);
        textLines.push(`?????????: ${todo.updatedAt}`);
        textLines.push(`?????????: ${todo.progress} %`);
        textLines.push(`???????????????: ${todo.status}`);
        textLines.push('#### ????????????');

        if (todo.activities.length === 0) {
          textLines.push('- ?????????????????????????????????');
        }

        for (const activity of todo.activities) {
          textLines.push(
            `- ${activity.text} (?????????: ${activity.createdAt}, ?????????: ${activity.updatedAt})`
          );
        }

        textLines.push(``);
      }
    }

    const downloadLink = document.createElement('a');
    downloadLink.download = `???????????????????????????_${now}.md`;

    const unicodeArray = Encoding.stringToCode(textLines.join('\n'));
    const sjisArray = Encoding.convert(unicodeArray, {
      to: 'SJIS',
      from: 'UNICODE',
    });
    const uint8Array = new Uint8Array(sjisArray);

    downloadLink.href = URL.createObjectURL(
      new Blob([uint8Array], { type: 'text/markdown' })
    );

    downloadLink.click();
  };

  return (
    <div className="mt-2">
      <div className="mb-3 flex items-center justify-between">
        <HeadingPrimary data-en="Projects">????????????????????????</HeadingPrimary>

        <div>
          <Button onClick={handleOnClickExportMarkdown}>Export Markdown</Button>
        </div>
      </div>

      <div className="mb-3">
        <FormInputWithButton
          submitLabel="????????????"
          placeholder="??????????????????????????????????????????"
          onSubmit={handleAddNewProject}
        />
      </div>

      {projects.map((project) => {
        return (
          <div key={project.id} className="mb-3">
            <ProjectCard
              project={project}
              onClickProjectNameEdit={() => handleClcikProjectNameEdit(project)}
              onClickProjectDescriptionEdit={() =>
                handleClickProjectDescriptionEdit(project)
              }
              onClickTodoNameEdit={(todo) =>
                handleClickTodoNameEdit(project.id, todo)
              }
              onClickTodoDetailEdit={(todo) =>
                handleClickTodoDetailEdit(project.id, todo)
              }
              onAddTodo={(name) => handleAddNewTodo(project.id, name)}
              onClickAddActivity={handleAddNewActivity}
              onClickActivityEdit={handleEditActivity}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsPage;
