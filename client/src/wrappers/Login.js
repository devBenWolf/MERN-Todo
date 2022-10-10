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

        @media(min-width: 600px) {
            width: 400px;
        }
    }


    label {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: 14px;
    }  

    input {
        padding: 0.2rem;
        border: none;
        border-radius: 3px;
        margin-top: 0.5rem;
        height: 2.5rem;
        width: 300px;
        border: 1px solid #00d4ff;
    }

    input:focus {
        border: 1px solid purple;

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
        margin-bottom: 0.5rem;
    }

    .input-container {
        height: 90%;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .input-container  {
        >*:where(:not(:first-child)) {
        margin-top: 2rem;
        }
    }

    .submit-btn {
        padding: 0.5rem 2rem;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        background-color: #00d4ff;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: 0.1rem;
    }

    .submit-btn:hover {
        background-color: hsl(190, 100%, 30%);
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