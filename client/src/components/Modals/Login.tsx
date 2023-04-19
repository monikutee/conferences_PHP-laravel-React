import React from "react";
import apiFetch from "../../services/api";
import { Context } from "../../contextStore";
import * as yup from "yup";
import { useFormik } from "formik";
import { CloseButton } from "./ModalButtons";
import { Backdrop, StyledForm } from "./Modals.styled";

export const Login: React.FC = () => {
    const { setLoginVisibility, setUser } = React.useContext(Context);

    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Enter a valid email")
            .required("Email is required"),
        password: yup
            .string()
            .min(8, "Password should be of minimum 8 characters length")
            .required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            try {
                apiFetch("/login", {
                    method: "POST",
                    body: JSON.stringify(values),
                }).then((response) => {
                    localStorage.setItem("access_token", response.access_token);
                    setUser(response.access_token);
                    closeForm();
                });
            } catch (error) {
                alert("Error logging in");
                closeForm();
            }
        },
    });

    function closeForm() {
        setLoginVisibility(false);
    }

    return (
        <Backdrop>
            <StyledForm
                onSubmit={formik.handleSubmit}
                className="create-event_modal-content"
                height="250px"
                width="500px"
            >
                <CloseButton onClick={closeForm} />

                <div className="create-event_modal-event-title">
                    <input
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="create-event_modal-event-titleInput"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && Boolean(formik.errors.email) && (
                        <span className="error" id="title-error-message">
                            oopsie
                        </span>
                    )}
                </div>
                <div className="create-event_modal-event-title">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="create-event_modal-event-titleInput"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Password"
                    />
                    {formik.touched.password &&
                        Boolean(formik.errors.password) && (
                            <span className="error" id="title-error-message">
                                oopsie
                            </span>
                        )}
                </div>
                <nav className="create-event_modal-save">
                    <button
                        className="create-event_modal-saveBtn"
                        type="submit"
                    >
                        Prisijungti
                    </button>
                </nav>
            </StyledForm>
        </Backdrop>
    );
};
