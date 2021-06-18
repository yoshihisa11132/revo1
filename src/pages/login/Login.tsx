import { Text } from "preact-i18n";
import { Helmet } from "react-helmet";
import styles from "./Login.module.scss";
import { useContext } from "preact/hooks";
import { APP_VERSION } from "../../version";
import { LIBRARY_VERSION } from "revolt.js";
import { Route, Switch } from "react-router-dom";
import { ThemeContext } from "../../context/Theme";
import { RevoltClient } from "../../context/revoltjs/RevoltClient";

import background from "./background.jpg";

import { FormLogin } from "./forms/FormLogin";
import { FormCreate } from "./forms/FormCreate";
import { FormResend } from "./forms/FormResend";
import { FormReset, FormSendReset } from "./forms/FormReset";

export const Login = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={styles.login}>
            <Helmet>
                <meta name="theme-color" content={theme.background} />
            </Helmet>
            <div className={styles.content}>
                <div className={styles.attribution}>
                    <span>
                        API:{" "}
                        <code>{RevoltClient.configuration?.revolt ?? "???"}</code>{" "}
                        &middot; revolt.js: <code>{LIBRARY_VERSION}</code>{" "}
                        &middot; App: <code>{APP_VERSION}</code>
                    </span>
                    <span>
                        {/*<LocaleSelector />*/}
                    </span>
                </div>
                <div className={styles.modal}>
                    <Switch>
                        <Route path="/login/create">
                            <FormCreate />
                        </Route>
                        <Route path="/login/resend">
                            <FormResend />
                        </Route>
                        <Route path="/login/reset/:token">
                            <FormReset />
                        </Route>
                        <Route path="/login/reset">
                            <FormSendReset />
                        </Route>
                        <Route path="/">
                            <FormLogin />
                        </Route>
                    </Switch>
                </div>
                <div className={styles.attribution}>
                    <span>
                        <Text id="general.image_by" /> &lrm;@lorenzoherrera
                        &rlm;· unsplash.com
                    </span>
                </div>
            </div>
            <div
                className={styles.bg}
                style={{ background: `url('${background}')` }}
            />
        </div>
    );
};