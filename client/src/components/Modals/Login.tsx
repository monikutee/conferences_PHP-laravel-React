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
    ActionNav,
} from "./Modals.styled";
import { useTranslation } from "react-i18next";

export const Login: React.FC = () => {
    const { t } = useTranslation();
    const { setLoginVisibility, setUser, csrfToken } =
        React.useContext(Context);

    const validationSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(""),
        _token: yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            _token: csrfToken,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            try {
                apiFetch("/login", {
                    method: "POST",
                    body: JSON.stringify(values),
                }).then((response) => {
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
                height="250px"
                width="500px"
            >
                <CloseButton onClick={closeForm} />
                <input
                    hidden
                    name="_token"
                    value={formik.values._token}
                    onChange={() => {
                        return;
                    }}
                />
                <BasicInputWrap>
                    <input
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && Boolean(formik.errors.email) && (
                        <StyledError>
                            {t("conference_calendar.email_error")}
                        </StyledError>
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
                            <StyledError>
                                {t("conference_calendar.required")}
                            </StyledError>
                        )}
                </BasicInputWrap>
                <ActionNav>
                    <button type="submit">
                        {t("conference_calendar.login")}
                    </button>
                </ActionNav>
            </StyledForm>
        </Backdrop>
    );
};
