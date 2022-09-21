import styled from "styled-components"

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: hsl(var(--bg-dark));
    color: hsl(var(--text-dark));

    form {
        display: flex;
        flex-direction: column;
        width: 90%;
        background-color: hsl(var(--textbox-dark));
        align-items: center;
        border-radius: 3px;
        padding: 1rem 0;
        border-top: 3px solid #00d4ff;
        font-size: 12px;


        @media(min-width: 400px) {
            width: 300px;
        }

        @media(min-width: 600px) {
            width: 400px;
        }

        @media (min-width: 750px) {
            width: 450px;
            font-size: 14px;
        }
    }

    label {
        display: flex;
        flex-direction: column;
        font-weight: bold;
    }

    

    input {
        padding: 0.2rem;
        bordeR: none;
        border-radius: 3px;
        margin-top: 0.6rem;
        height: 2.5rem;
        width: 100%;
    }

    input:focus {
        border: 1px solid #00d4ff;
    }

    h3 {
        text-align: center;
        font-size: 24px;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    div >* {
        margin-bottom: 1rem;
    }

    .input-container {
        height: 90%;
        width: 90%;
    }

    .input-container  {
        >*:where(:not(:first-child)) {
        margin-top: 2rem;
        }
    }

    .submit-btn {
        padding: 0.2rem 1rem;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }

    .submit-btn:hover {
        background: #00d4ff;
        color: white;
        font-weight: bold;
    }

    .register-login-div {
        display: flex;
        font-size: 14px;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 0.5rem;
    }

    .register-login-btn {
        width: fit-content;
        margin-left: 0.5rem;
        color: #00d4ff;
        cursor: pointer;
    }

`