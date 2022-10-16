import { useContext, useState } from 'react';
import dayjs from 'dayjs';
import ModalEditOneText from '../components/modal/modal-edit-one-text.component';
import ModalEditTodoDetail from '../components/modal/modal-edit-todo-detail.component';
import { modalContext } from '../components/modal/modal.context';
import ProjectCard from '../components/project-card.component';
import uniqueNumberId from '../mock/unique-number-id';
import { Project, Todo, TodoStatus } from '../models';
import Button from '../components/buttons/button.component';
import FormInputWithButton from '../components/form/form-input-with-button.component';
import HeadingPrimary from '../components/heading/heading-primary.component';

const DAYJS_FORMAT = 'YYYY/MM/DD HH:mm:ss';

const PROJECTS = [
  {
    id: uniqueNumberId(),
    name: 'Project 1',
    description: 'Project Overview Description aaaaaaaaaaaa',
    updatedAt: dayjs().format(DAYJS_FORMAT),
    createdAt: dayjs().format(DAYJS_FORMAT),
    counts: {
      open: 3,
      closed: 4,
      completed: 7,
    },
    todos: [
      {
        id: uniqueNumberId(),
        name: 'todo1',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 60,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
      {
        id: uniqueNumberId(),
        name: 'todo2',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 30,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
      {
        id: uniqueNumberId(),
        name: 'todo3',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 80,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
    ],
  },
  {
    id: uniqueNumberId(),
    name: 'Project 2',
    description: 'Project Overview Description aaaaaaaaaaaa',
    updatedAt: dayjs().format(DAYJS_FORMAT),
    createdAt: dayjs().format(DAYJS_FORMAT),
    counts: {
      open: 3,
      closed: 4,
      completed: 7,
    },
    todos: [
      {
        id: uniqueNumberId(),
        name: 'todo1',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 20,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
      {
        id: uniqueNumberId(),
        name: 'todo2',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 40,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
      {
        id: uniqueNumberId(),
        name: 'todo3',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 90,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
    ],
  },
  {
    id: uniqueNumberId(),
    name: 'Project 3',
    description: 'Project Overview Description aaaaaaaaaaaa',
    updatedAt: dayjs().format(DAYJS_FORMAT),
    createdAt: dayjs().format(DAYJS_FORMAT),
    counts: {
      open: 3,
      closed: 4,
      completed: 7,
    },
    todos: [
      {
        id: uniqueNumberId(),
        name: 'todo1',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 10,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
      {
        id: uniqueNumberId(),
        name: 'todo2',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 100,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
      {
        id: uniqueNumberId(),
        name: 'todo3',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 30,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
    ],
  },
];

export function Index() {
  const { openModal, closeModal } = useContext(modalContext);

  const [projects, setProjects] = useState(PROJECTS);
  const [newProjectName, setNewProjectName] = useState('');

  const handleClcikProjectNameEdit = (project: Project) => {
    const modalId = 'project-name-edit-modal';
    openModal(
      modalId,
      <ModalEditOneText
        label="Project Name"
        name={project.name}
        onSave={(name) => {
          const newProjects = projects.map((pj) => {
            if (pj.id === project.id) {
              pj.name = name;
            }

            return pj;
          });

          setProjects([...newProjects]);

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
        onSave={(description) => {
          const newProjects = projects.map((pj) => {
            if (pj.id === project.id) {
              pj.description = description;
            }

            return pj;
          });

          setProjects([...newProjects]);

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
        onSave={(name) => {
          const newProjects = projects.map((pj) => {
            if (pj.id === projectId) {
              pj.todos = pj.todos.map((t) => {
                if (t.id === todo.id) {
                  t.name = name;
                }

                return t;
              });
            }

            return pj;
          });

          setProjects([...newProjects]);

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
        onSave={(detail) => {
          const newProjects = projects.map((pj) => {
            if (pj.id === projectId) {
              pj.todos = pj.todos.map((t) => {
                if (t.id === todo.id) {
                  t.progress = detail.progress;
                  t.status = detail.status;
                }

                return t;
              });
            }

            return pj;
          });

          setProjects([...newProjects]);

          closeModal(modalId);
        }}
        onClose={() => {
          closeModal(modalId);
        }}
      />
    );
  };

  const handleAddNewTodo = (projectId: number, name: string) => {
    const newProjects = projects.map((pj) => {
      if (pj.id === projectId) {
        pj.todos.push({
          id: uniqueNumberId(),
          name,
          descriptions: [],
          progress: 0,
          status: 'OPEN',
          updatedAt: dayjs().format(DAYJS_FORMAT),
          createdAt: dayjs().format(DAYJS_FORMAT),
          user: {
            name: '',
          },
        });
      }

      return pj;
    });

    setProjects([...newProjects]);
  };

  const handleAddNewProject = () => {};

  return (
    <div className="mt-8">
      <div className="mb-6">
        <HeadingPrimary data-en="Projects">プロジェクト一覧</HeadingPrimary>
      </div>

      <div className="mb-6">
        <FormInputWithButton
          submitLabel="新規追加"
          placeholder="新規で追加するプロジェクト名"
          onSubmit={handleAddNewProject}
        />
      </div>

      {projects.map((project) => {
        return (
          <div key={project.id} className="mb-8">
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
}

export default Index;
