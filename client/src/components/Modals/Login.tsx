import React from "react";
import apiFetch from "../../services/api";
import { Context } from "../../contextStore";
import * as yup from "yup";
import { useFormik } from "formik";
import { CloseButton } from "./ModalButtons";
import {
    Backdrop,
    StyledForm,
    BasicInputWrap,
    StyledError,
} from "./Modals.styled";

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
                    console.log(response);
                    if (response.error) {
                        alert(response.error);
                        closeForm();
                    } else {
                        localStorage.setItem(
                            "access_token",
                            response.access_token
                        );
                        setUser(response.access_token);
                        closeForm();
                    }
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

                <BasicInputWrap>
                    <input
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && Boolean(formik.errors.email) && (
                        <StyledError>oopsie</StyledError>
                    )}
                </BasicInputWrap>
                <BasicInputWrap>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Password"
                    />
                    {formik.touched.password &&
                        Boolean(formik.errors.password) && (
                            <StyledError>oopsie</StyledError>
                        )}
                </BasicInputWrap>
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
