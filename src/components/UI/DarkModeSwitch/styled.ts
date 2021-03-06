import styled from "styled-components";

export const Label = styled.label`
  cursor: pointer;
  padding: 1rem;
  position: relative;
  -webkit-tap-highlight-color: #fff;
`;

export const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
`;

export const Planet = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  background: radial-gradient(3.75em, 99%, transparent 100%);
  background-color: #f2c94c;
  background-repeat: no-repeat;
  position: relative;
  will-change: background;
  transition: all 400ms ease;

  /* Safari transition issue */
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);

  &::after {
    content: "";
    background-color: #828894;
    width: 2rem;
    height: 2rem;
    position: absolute;
    border-radius: 50%;
    will-change: opacity, transform, background-color;
    opacity: 0;
    transform: translate(2em, -2em);
    transition: opacity 400ms ease, transform 400ms ease,
      background-color 400ms ease;
  }

  ${Input}:checked + & {
    background-color: #d7d7d8;

    &::after {
      opacity: 1;
      transform: translate(0.6em, -0.5em);
    }
  }
`;

export const Elements = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 400ms ease;

  ${Input}:checked ~ & {
    transform: rotate(180deg);
  }
`;

export const SVG = styled.svg`
  position: absolute;
  width: 7px;
  height: 7px;
  opacity: 1;
  transition: transform 400ms ease, opacity 200ms ease, width 200ms ease,
    height 200ms ease;

  circle {
    fill: #f2c94c;
    transition: fill 400ms ease;
  }

  &:first-child {
    transform: translate(1.8em, 0.35em);
  }
  &:nth-child(2) {
    transform: translate(2.8em, 0.7em);
  }

  &:nth-child(3) {
    transform: translate(3.2em, 1.8em);
  }

  &:nth-child(4) {
    transform: translate(2.8em, 2.8em);
  }

  &:nth-child(5) {
    transform: translate(1.8em, 3.2em);
  }

  &:nth-child(6) {
    transform: translate(0.7em, 2.8em);
  }

  &:nth-child(7) {
    transform: translate(0.35em, 1.8em);
  }

  &:nth-child(8) {
    transform: translate(0.7em, 0.7em);
  }

  ${Input}:checked ~ ${Elements} & {
    &:first-child {
      transform: translate(2em, 1em);
      opacity: 0;
    }
    &:nth-child(2) {
      transform: translate(3em, 1.5em);
      opacity: 0;
    }
    &:nth-child(3) {
      transform: translate(3em, 2em);
      opacity: 0;
    }
    &:nth-child(4) {
      transform: translate(3em, 2em);
      opacity: 0;
    }
    &:nth-child(5) {
      transform: translate(1.9em, 2.6em);
      width: 0.3em;
      height: 0.3em;
      circle {
        fill: #d7d7d820;
      }
    }
    &:nth-child(6) {
      transform: translate(1.4em, 2.5em);
      width: 0.3em;
      height: 0.3em;
      circle {
        fill: #d7d7d820;
      }
    }
    &:nth-child(7) {
      transform: translate(1.1em, 1.6em);
      width: 0.7em;
      height: 0.7em;
      circle {
        fill: #d7d7d820;
      }
    }
    &:nth-child(8) {
      width: 0.45em;
      height: 0.45em;
      transform: translate(1.7em, 2.1em);
      circle {
        fill: #d7d7d820;
      }
    }
  }
`;
