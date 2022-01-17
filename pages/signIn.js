import { useState } from "react";
import FormSignIn from "../components/admin/signin";
import FormSignUp from "../components/admin/signup";

export default function LoginPage(){
    const [isLogin, setIsLogin] = useState(true);

    return(
        <div align='center'>
            {isLogin ? <FormSignIn/>:<FormSignUp/>}
            {isLogin ? (
            <a>Don't have an account yet? <a href='#'onClick={() => setIsLogin(false)}>Sign Up</a></a>
            ):(
            <a>Already have an account? <a href='#'onClick={() => setIsLogin(true)}>Sign In</a></a>
            )}
        </div>
    )
}