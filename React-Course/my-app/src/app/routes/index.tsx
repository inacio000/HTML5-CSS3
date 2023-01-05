import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { DashboardPage, LoginPage } from "../pages";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/login-page" element={<LoginPage />} />
                <Route path="/home-page" element={<DashboardPage />} />


                <Route path="*" element={<Navigate to="/home-page"/>} />

            </Switch>
        </BrowserRouter>
    );
}