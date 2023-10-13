import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

const headers = {
  Authorization: "Bearer " + localStorage.getItem("token"),
};

export const Administrator = () => {
  const [menu, setMenus] = useState([]);
  const [menuEditable, setMenuEditable] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [createOrEdit, setCreateOrEdit] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URI}/api/read-menu`)
      .then((response) => response.json())
      .then((loquerecibo) => setMenus(loquerecibo));
  }, []);

  const deleteMenu = async (id) => {
    const resp = await axios.delete(
      `${import.meta.env.VITE_SERVER_URI}/api/delete-menu/${id}`,
      {
        headers,
      }
    );
    const { status } = resp;

    if (status === 200) {
      const deleteMenuOnRender = menu.filter((menu) => menu.id !== id);
      setMenus(deleteMenuOnRender);
    }
  };

  const updateMenu = async (menu) => {
    const { id, name, description, price } = menu;

    const resp = await axios.put(
      `${import.meta.env.VITE_SERVER_URI}/api/update-menu`,
      {
        id_menu: id,
        modify: {
          name,
          description,
          price,
        },
      },
      {
        headers,
      }
    );
    const { status } = resp;

    if (status === 200) {
      const othersMenu = menu.filter((prev) => prev.id !== menu.id);
      setMenu([...othersMenu, menu]);
    }
    setShowForm(false);
  };

  const createMenu = async (curso) => {
    const {  name, description, imagen, price } = menu;

    const resp = await axios.post(
      `${import.meta.env.VITE_SERVER_URI}/api/create-menu`,
      {
        name,
        description,
        imagen,
        price
      },
      {
        headers: { ...headers, accept: "application/json" },
      }
    );
    const { status } = resp;

    if (status === 201) {
      const othersMenu = menu.filter((prev) => prev.id !== menu.id);
      setMenu([...othersMenu, menu]);
    }
    setShowForm(false);
  };

  const handleDelete = (id, title) => {
    let validator = window.confirm(
      `Está seguro que quiere eliminar el menu ${title}?`
    );
    if (validator) deleteMenu(id);
  };

  const handleEdit = (menu) => {
    setShowForm(true);
    setMenuEditable(menu);
    setCreateOrEdit("edit");
  };

  const handleCreate = () => {
    setShowForm(true);
    setMenuEditable({});
    setCreateOrEdit("create");
  };

  return (
    <Container className="mt-4" id="admin">
      <h1>Admin</h1>
      {!showForm && (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {menu.map((menu) => (
              <tr key={menu.id}>
                <th>{menu.title}</th>
                <td>{menu.description}</td>
                <td>{menu.price}</td>
                <td>
                  <button
                    className="btn btn-danger mr-2 mb-2"
                    onClick={() => handleDelete(menu.id, menu.title)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-warning mr-2 mb-2 "
                    onClick={() => handleEdit(menu)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={handleCreate}>Crear nuevo</button>
      {showForm && (
        <form>
          <div>
            <label>Títle</label>
            <input
              type="text"
              value={menuEditable.name}
              onChange={(event) =>
                setMenuEditable((prev) => {
                  return { ...prev, name: event.target.value };
                })
              }
            />
          </div>
          <div>
            <label>Desc</label>
            <textarea
              value={menuEditable.description}
              onChange={(event) =>
                setMenuEditable((prev) => {
                  return { ...prev, description: event.target.value };
                })
              }
            ></textarea>
          </div>
          <div>
            <label>Image</label>
            <input
              type="text"
              value={menuEditable.imagen}
              onChange={(event) =>
                setMenuEditable((prev) => {
                  return { ...prev, imagen: event.target.value };
                })
              }
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              value={menuEditable.price}
              onChange={(event) =>
                setMenuEditable((prev) => {
                  return { ...prev, price: event.target.value };
                })
              }
            />
          </div>
          {createOrEdit === "edit" && (
            <button type="button" onClick={() => updateMenu(menuEditable)}>
              Editar
            </button>
          )}
          {createOrEdit === "create" && (
            <button type="button" onClick={() => createMenu(menuEditable)}>
              Crear
            </button>
          )}
        </form>
      )}
    </Container>
  );
};
