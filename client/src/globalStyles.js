import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --bg-dark: 240, 0%, 0%;
  --textbox-dark: 240, 2%, 12%;
  --text-dark: 0, 5%, 82%;
  --bg-light:0, 0%, 100%;
  --textbox-light: 0, 0%, 100%;
  --text-light: 0, 1%, 11%;
}

header {
    position: absolute;
    color: white;
    height: 30vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    top: 0;
}

.background-image {
    width: 100vw;
}

.header-icon-div {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 300px;
    align-items: center;

    @media (min-width: 450px) {
        width: 325px;
    }
    @media (min-width: 700px) {
        width: 375px;
    }
    @media (min-width: 1000px) {
        width: 425px;
    }
}

.header-icon-div * {
    margin: 1rem 1rem;
}
.theme-icon {
    width: 25px;
    height: 25px;
}


/*inputs*/ 

input::placeholder {
    font-size: 12px;
}

.default-checkbox {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
}

.custom-checkbox {
    transform: translate(30%, 40%);
    height: 20px;
    width: 20px;
    background-color: ${props => props.themeBoolean ? "hsl(var(--textbox-dark))" : "hsl(var(--textbox-light))"};
    border-radius: 25px;
    border: 1px solid;
}

.todo-map-wrapper {
    scrollbar-width: none;
}

.todo-map-wrapper::-webkit-scrollbar {
    width: 0px;
}

.alert {
    padding: 0.5rem;
  margin-bottom: 1rem;
  border-color: transparent;
  text-align: center;
  letter-spacing: 1px;
  border-radius: 3px;
}

.alert-danger {
    color: pink;
    background: darkred;
    font-weight: bold;
}

.alert-success {
    background-color: lightgreen;
    color: darkgreen;
}

`