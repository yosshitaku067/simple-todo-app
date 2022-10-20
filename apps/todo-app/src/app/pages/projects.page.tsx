import dayjs from 'dayjs';
import React, { useContext, useState } from 'react';
import { PROJECTS } from '../../mock/projects';
import uniqueNumberId from '../../mock/unique-number-id';
import FormInputWithButton from '../components/form/form-input-with-button.component';
import HeadingPrimary from '../components/heading/heading-primary.component';
import ModalEditOneText from '../components/modal/modal-edit-one-text.component';
import ModalEditTodoDetail from '../components/modal/modal-edit-todo-detail.component';
import { modalContext } from '../components/modal/modal.context';
import ProjectCard from '../components/project-card.component';
import {
  useAllProjectsQuery,
  useCreateProjectMutation,
  AllProjectsQuery,
} from '../graphql/generated/graphql';
import { DAYJS_FORMAT } from '../helper/dayjs-format';
import { allProjectToProjectModel, Project, Todo } from '../models';
import ALL_PROJECT from '../graphql/queries/project/all-project.query';

const ProjectsPage: React.FC = () => {
  const { openModal, closeModal } = useContext(modalContext);

  // const [projects, setProjects] = useState(PROJECTS);

  const { data: response } = useAllProjectsQuery({
    fetchPolicy: 'cache-first',
  });
  const [createProjectMutation, { loading }] = useCreateProjectMutation({
    update: (cache, { data }) => {
      console.log(cache, data);

      const newProject = data?.createProject;
      const existingProjects = cache.readQuery<AllProjectsQuery>({
        query: ALL_PROJECT,
      });

      if (newProject && existingProjects) {
        // FETCH_ALL_TASKSのキャッシュに新規タスクを追加
        cache.writeQuery({
          query: ALL_PROJECT,
          data: { allProjects: [...existingProjects.allProjects, newProject] },
        });
      }
    },
  });

  console.log(response);
  const projects = allProjectToProjectModel(response);

  const handleClcikProjectNameEdit = (project: Project) => {
    // const modalId = 'project-name-edit-modal';
    // openModal(
    //   modalId,
    //   <ModalEditOneText
    //     label="Project Name"
    //     name={project.name}
    //     onSave={(name) => {
    //       const newProjects = projects.map((pj) => {
    //         if (pj.id === project.id) {
    //           pj.name = name;
    //         }
    //         return pj;
    //       });
    //       setProjects([...newProjects]);
    //       closeModal(modalId);
    //     }}
    //     onClose={() => {
    //       closeModal(modalId);
    //     }}
    //   />
    // );
  };

  const handleClickProjectDescriptionEdit = (project: Project) => {
    // const modalId = 'project-description-edit-modal';
    // openModal(
    //   modalId,
    //   <ModalEditOneText
    //     label="Project Overview"
    //     name={project.description}
    //     onSave={(description) => {
    //       const newProjects = projects.map((pj) => {
    //         if (pj.id === project.id) {
    //           pj.description = description;
    //         }
    //         return pj;
    //       });
    //       setProjects([...newProjects]);
    //       closeModal(modalId);
    //     }}
    //     onClose={() => {
    //       closeModal(modalId);
    //     }}
    //   />
    // );
  };

  const handleClickTodoNameEdit = (projectId: number, todo: Todo) => {
    // const modalId = 'todo-name-edit-modal';
    // openModal(
    //   modalId,
    //   <ModalEditOneText
    //     label="Todo Name"
    //     name={todo.name}
    //     onSave={(name) => {
    //       const newProjects = projects.map((pj) => {
    //         if (pj.id === projectId) {
    //           pj.todos = pj.todos.map((t) => {
    //             if (t.id === todo.id) {
    //               t.name = name;
    //             }
    //             return t;
    //           });
    //         }
    //         return pj;
    //       });
    //       setProjects([...newProjects]);
    //       closeModal(modalId);
    //     }}
    //     onClose={() => {
    //       closeModal(modalId);
    //     }}
    //   />
    // );
  };

  const handleClickTodoDetailEdit = (projectId: number, todo: Todo) => {
    // const modalId = 'todo-detail-edit-modal';
    // openModal(
    //   modalId,
    //   <ModalEditTodoDetail
    //     progress={todo.progress}
    //     status={todo.status}
    //     onSave={(detail) => {
    //       const newProjects = projects.map((pj) => {
    //         if (pj.id === projectId) {
    //           pj.todos = pj.todos.map((t) => {
    //             if (t.id === todo.id) {
    //               t.progress = detail.progress;
    //               t.status = detail.status;
    //             }
    //             return t;
    //           });
    //         }
    //         return pj;
    //       });
    //       setProjects([...newProjects]);
    //       closeModal(modalId);
    //     }}
    //     onClose={() => {
    //       closeModal(modalId);
    //     }}
    //   />
    // );
  };

  const handleAddNewTodo = (projectId: number, name: string) => {
    // const newProjects = projects.map((pj) => {
    //   if (pj.id === projectId) {
    //     pj.todos.push({
    //       id: uniqueNumberId(),
    //       name,
    //       descriptions: [],
    //       progress: 0,
    //       status: 'OPEN',
    //       updatedAt: dayjs().format(DAYJS_FORMAT),
    //       createdAt: dayjs().format(DAYJS_FORMAT),
    //       user: {
    //         name: '',
    //       },
    //     });
    //   }
    //   return pj;
    // });
    // setProjects([...newProjects]);
  };

  const handleAddNewProject = (value: string) => {
    createProjectMutation({
      variables: {
        name: value,
      },
    });

    // projects.push({
    //   id: uniqueNumberId(),
    //   name: value,
    //   description: '',
    //   updatedAt: dayjs().format(DAYJS_FORMAT),
    //   createdAt: dayjs().format(DAYJS_FORMAT),
    //   todos: [],
    //   counts: {
    //     closed: 0,
    //     completed: 0,
    //     open: 0,
    //   },
    // });

    // setProjects([...projects]);
  };

  return (
    <div className="mt-2">
      <div className="mb-3">
        <HeadingPrimary data-en="Projects">プロジェクト一覧</HeadingPrimary>
      </div>

      <div className="mb-3">
        <FormInputWithButton
          submitLabel="新規追加"
          placeholder="新規で追加するプロジェクト名"
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
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsPage;
