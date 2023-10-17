import { useContext } from "react";
import { useState} from "react";
import { DataContext } from "../../components/DataContext/DataContext";
import Table from "react-bootstrap/Table"
import React from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useData } from "../../components/DataContext/DataContext";
import Modal from "react-bootstrap/Modal";
import "../../css/carrito.css"



export const Carrito= () => {
	const { cart, setCart } = useContext(DataContext);
  const [showDiv, setShowDiv] = useState(false);
  const [showDiv2, setShowDiv2] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  const validationSchema = () =>
	    Yup.object().shape({
		    name: Yup.string()
			    .required("* Obligatory field")
			    .min(3,  "Name must be at least 3 characters")
          .max(30, "The Name must have a maximum of 30 characters"),
		    phone: Yup.string()
		      .required("* Obligatory field")
		      .min(7, "The phone number must have at least 7 characters")
          .max(25, "The telephone number must have a maximum of 25 characters"),
        address: Yup.string()
          .required("* Obligatory field")
          .min(6, "The address must be at least 6 characters")
          .max(40, "The Address must have a maximum of 40 characters"),
        checkbox: Yup.string()
          .required("* Obligatory field")
             
    })

  const total = () =>
    cart.reduce((acumulador, valorActual) => {
      const cantidad = valorActual.cantidad || 1;
      return acumulador + cantidad * valorActual.price;
  }, 0);
    const onSubmit = () => {
      if (cart.length === 0) {
        alert("The cart is empty. Please add products before purchasing.");
      } else {
        if (!formik.isValid) {
          alert(
            "Please complete all required fields correctly."
          );
        } else {
          const numericInputValue2 = parseFloat(inputValue2);

          if (isNaN(numericInputValue2)) {
            alert("The value entered is not valid. Please enter a number.");
            return;
          }
          cart.forEach((producto) => {
            addCart(producto, numericInputValue2);
          });
          clearCart();
        }
      }
    };
    const formik = useFormik({
      initialValues: {
        name: "",   
        phone: "",  
        address: "",
        checkbox: false,
      },
      enableReinitialize: true,
      validationSchema,
      onSubmit,
    })
    const handlePagoOnline = () => {
      if (cart.length === 0 ) {
        alert("The cart is empty. Please add products before purchasing.");
      }
      if (Object.keys(formik.values).length === 0){
        alert("The form is empty");
      }
       else {
        if (Object.keys(formik.values).length === 0) {
          alert(
            "Please complete all required fields correctly."
          );
        } else {
          setShowDiv(true);
          setShowDiv2(false);
        }
      }   
    };
    const handleEnviarPedido = () => {
      if (cart.length === 0) {
        alert("The cart is empty. Please add products before purchasing.");
      } else {
        if (Object.keys(formik.values).length === 0) {
          alert(
            "Please complete all required fields correctly."
          );
        } else {
          clearCart();
          formik.resetForm();
          setShowDiv( false);
          setShowDiv2 (true); 
        }  
      }
    };

    const handleSubmit = () => {
      if (cart.length === 0) {
        alert("The cart is empty. Please add products before purchasing.");
      } else {
        if (Object.keys(formik.values).length === 0) {
          alert(
            "Please complete all required fields correctly."
          );
        } else {
          clearCart();
          formik.resetForm();
        }
      }
    };

	const removeItemFromCart = (id) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	}

    const clearCart = () => {
    setCart([]);
    formik.resetForm();
  
    };
        return ( 
            <>
            <Table id="responsive-table1" striped bordered hover variant="dark">
            <thead >
                <tr id="tr">
                    <th>Name</th>
                    <th id="img">img</th>
                    <th>Price</th>
                    <th>Detalles del pedido</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(producto => (
                    <tr key={producto.id}>
                        <td id="td" data-label="Name:">{producto.name}</td>
                        <td id="img">
                            <img
                                height={60}
                                src={producto.imagen}
                                alt={producto.name}
                            />
                        </td>
                        <td id="td" data-label="Price:">{producto.price}</td>
                        <td id="td" data-label="Detalles:">{producto.description}</td>
						            <td id="td" data-label="Cantidad:">{producto.cantidad}</td>
                        <td>
							              <Button variant="danger" onClick={() => removeItemFromCart(producto.id)}>								
                                 Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td>{total()}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </Table>
		    <Button variant="danger" onClick={clearCart}>
          Clear Cart
        </Button>
		<br />
    <br />
		<Form onSubmit={formik.handleSubmit} className="responsive-form1" >
        <Form.Group  className="form-group1" controlId="formBasicName">
          <Form.Label className="label-cart">Name</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            type="text"
            name="name"
            className={
              formik.errors.name &&
              formik.touched.name &&
              "error"
          }
            maxLength={30}
						minLength={3}
	 					value={formik.values.name}
	 					onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="errorMessage">{formik.errors.name}</div>
          )}
        </Form.Group>
        <Form.Group  className="form-group1" controlId="formBasicPhone">
          <Form.Label className="label-cart">Phone</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            type="number"
            name="phone"
            className={
              formik.errors.phone &&
              formik.touched.phone &&
              "error"
          }
            maxLength={25}
						minLength={7}
	 					value={formik.values.phone}
	 					onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="errorMessage">{formik.errors.phone}</div>
          )}  
        </Form.Group>
        <Form.Group  className="form-group1" controlId="formBasicCheckbox">
          {showDiv2 &&(
          <div className="checkbox-label">
            <Form.Check 
              onChange={formik.handleChange}
              value={formik.values.checkbox}
              name="checkbox"
              type="checkbox" 
              label="Cash payment"
              onBlur={formik.handleBlur}
              className={
                formik.errors.checkbox &&
                formik.touched.checkbox &&
                "error"} />
            {formik.touched.checkbox && formik.errors.checkbox && (
              <div className="errorMessage">{formik.errors.checkbox}</div>)} 
          </div>
          )}
        </Form.Group>
        {showDiv2 &&(
       <div>
       <br />
        <h6>If your payment is in cash, click here</h6>
        <Button 
          id="efectivo"
          variant="primary" 
          className="button-cart"
          type="submit" 
          style={{
            backgroundColor: '#372214',
            border:"none"
          }}
          onClick={handleSubmit}
          disabled={!formik.isValid || cart.length === 0 || !formik.values.checkbox}>
          Cash payment
        </Button>
        <Button
        disabled={!formik.isValid || cart.length === 0}
        variant="primary"
        className="button-cart"
        type="submit"
        style={{
          backgroundColor: '#372214',
          border:"none"
        }}
        onClick={handlePagoOnline}
        >
        Online Payment
        </Button>
        <br />
        <br />
        </div>
        )}
        {showDiv && (
        <div>
          <div className="enviar_pedido">
            <h6>If you completed the online payment, click here</h6>
            <Button
            variant="primary"
            type="submit"
            className="btn btn-info btn-block mt-4"
            onClick={handleEnviarPedido}
            disabled={!formik.isValid || cart.length === 0}
            >
            Send the order
            </Button>
          </div>
          <br />
          
        </div>
        )}
    </Form>
        <Modal show={showModal} onHide={() =>setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Detalles de la Orden</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>¡Pedido Realizado Exitosamente!</p>
              <p>Demora aproximada 15 minutos</p>
            </Modal.Body>
        </Modal>
        </>
    )
};