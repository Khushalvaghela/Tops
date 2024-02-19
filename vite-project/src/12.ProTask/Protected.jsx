import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const supeAdmin = ({ Componenet }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsonData = localStorage.getItem("login");
    let normalData = JSON.parse(jsonData);
    if (!normalData || normalData?.userType !== "SuperAdmin") {
      toast.warn("Please do login");
      navigate("/");
    }
  });
  return <>{Componenet}</>;
};

export const AdmPro = ({ Componenet }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsonData = localStorage.getItem("login");
    let normalData = JSON.parse(jsonData);
    if (
      !normalData ||
      (normalData?.userType !== "Admin" &&
        normalData?.userType !== "SuperAdmin")
    ) {
      toast.warn("Please do login");
      navigate("/");
    }
  });
  return <>{Componenet}</>;
};

export const ProfilePro = ({ Componenet }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsonData = localStorage.getItem("login");
    let normalData = JSON.parse(jsonData);
    if (
      !normalData ||
      (normalData?.userType !== "Profile" &&
        normalData?.userType !== "SuperAdmin" &&
        normalData?.userType !== "emp" &&
        normalData?.userType !== "Admin" &&
        normalData?.userType !== "user")
    ) {
      toast.warn("Please do login");
      navigate("/");
    }
  });
  return <>{Componenet}</>;
};

export const UserPro = ({ Componenet }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsonData = localStorage.getItem("login");
    let normalData = JSON.parse(jsonData);
    if (
      !normalData ||
      (normalData?.userType !== "Profile" &&
        normalData?.userType !== "SuperAdmin" &&
        normalData?.userType !== "emp" &&
        normalData?.userType !== "Admin")
    ) {
      toast.warn("Please do login");
      navigate("/");
    }
  });
  return <>{Componenet}</>;
};

export const EmpPro = ({ Componenet }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsonData = localStorage.getItem("login");
    let normalData = JSON.parse(jsonData);
    if (
      !normalData ||
      (normalData?.userType !== "SuperAdmin" &&
        normalData?.userType !== "emp" &&
        normalData?.userType !== "Admin")
    ) {
      toast.warn("Please do login");
      navigate("/");
    }
  });
  return <>{Componenet}</>;
};
