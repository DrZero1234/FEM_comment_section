import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    /* Remove default margin */
    * {
    margin: 0;
    padding: 0;
    font:inherit
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
    list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
    scroll-behavior: smooth;
    }

    html,
    body {
    height: 100%;
    }

    /* Set core body defaults */

    /* A elements that don't have a class get default styles */
    a:not([class]) {
    text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture,
    svg {
    display: block;
    max-width: 100%
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-fmotion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    }

    body {
        font-family: "Rubik", sans-serif;
        font-size: 1rem;
        background-color: ${({ theme }) => theme.colors.neutral_800}
    }

    li {
        list-style-type: none;
    }

      button:hover {
    opacity: 0.5;
    cursor: pointer;
  }

    @media (min-width: 30em) {
        body{
            display: grid;
            place-items: center;
            min-height: 100vh;
        }
    }
`;
