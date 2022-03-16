import React from "react";
import './button.css';

const ButtonOutlined = ({ label, handleClick }) => (
  <button
    className="btnOut"
    onClick={handleClick}>
    {label}
  </button>

);

const ButtonContained = ({ label, handleClick }) => (
  <button
    className="btnCont"
    onClick={handleClick}>
    {label}
  </button>

);

const ButtonCommunity = ({ label, handleClick }) => (
  <button
    className="btnComm"
    onClick={handleClick}>
    {label}
  </button>

);

const ButtonCommunityJoin = ({ label, handleClick }) => (
  <button
    className="btnCommJoin"
    onClick={handleClick}>
    {label}
  </button>

);

const BtnCommunityothers = ({ label, handleClick }) => (
  <button
    className="btnCommOther"
    onClick={handleClick}>
    {label}
  </button>

);

export {ButtonOutlined, ButtonContained, ButtonCommunity, ButtonCommunityJoin, BtnCommunityothers};
