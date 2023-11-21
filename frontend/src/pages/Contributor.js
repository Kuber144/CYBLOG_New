/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import home from "../img/home.svg";
import { api } from "../api";
import maleUser from "../img/profuser.svg";
import { useCookies } from "react-cookie";
import { app } from "../";
export default function ContributorsPage() {
  const navigate = useNavigate();

  const coordinators = [
    {
      name: "Dr. Abhishek Vaish",
      college: "IIITA",
      designation: "Asst. Professor (IIITA)",
      imageSrc:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    {
      name: "Dr. Vrijendra Singh",
      college: "Coordinator's College 2",
      designation: "Professor (IIITA)",
      imageSrc:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    // {
    //   name: "Coordinator 3",
    //   college: "Coordinator's College 3",
    //   designation: "Coordinator",
    //   imageSrc:
    //     "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    // },
  ];

  const coCoordinators = [
    {
      name: "Dr. Anurika Vaish",
      college: "Co-Coordinator's College 1",
      designation: "Associate Professor (IIITA)",
      imageSrc:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    // {
    //   name: "Co-Coordinator 2",
    //   college: "Co-Coordinator's College 2",
    //   designation: "Co-Coordinator",
    //   imageSrc:
    //     "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    // },
    // {
    //   name: "Co-Coordinator 3",
    //   college: "Co-Coordinator's College 3",
    //   designation: "Co-Coordinator",
    //   imageSrc:
    //     "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    // },
  ];

  const researchTeam = [
    {
      name: "Ravindra Kumar",
      college: "Research Team Member's College",
      designation: "M.tech Student (IIITA)",
      imageSrc:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
  ];

  const teamMembers = [
    {
      name: "Rajat Srivastava",
      college: "Team Member 1's College",
      designation: "Student (IIITA)",
      imageSrc:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    {
      name: "Viraj Jagtap",
      college: "Team Member 2's College",
      designation: "Student (IIITA)",
      imageSrc:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    {
      name: "Kaushik Mullick",
      college: "Team Member 3's College",
      designation: "Student (IIITA)",
      imageSrc:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    {
      name: "Kuber Jain",
      college: "Team Member 4's College",
      designation: "Student (IIITA)",
      imageSrc:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    {
      name: "Dhairya Bhadani",
      college: "Team Member 5's College",
      designation: "Student (IIITA)",
      imageSrc:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
  ];

  const handleClickExplore = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="mt-[6.5rem]">{/* <img src={home} alt="home" /> */}</div>
      <div>
        <p className="text-center text-3xl mt-12 font-bold">
          Contributors to CySecLearn
        </p>
        <div>
          {/* Coordinator Section */}
          <h1 className="mt-20 text-center font-bold text-3xl">Coordinators</h1>
          <div className="mt-8 flex justify-center">
            {coordinators.map((contributor, index) => (
              <div key={index} className="text-center mx-20 px-4">
                <img
                  src={contributor.imageSrc}
                  alt={`User ${index}`}
                  className="h-52 rounded-full mx-auto"
                />
                <p className="text-center font-semibold text-xl mt-2">
                  {contributor.name}
                </p>
                <p className="text-center font-semibold text-[#028ABE] text-lg">
                  {contributor.designation}
                </p>
              </div>
            ))}
          </div>

          {/* Co-Coordinator Section */}
          <h1 className="mt-20 text-center font-bold text-3xl">
            Co-Coordinator
          </h1>
          <div className="mt-8 flex justify-center">
            {coCoordinators.map((contributor, index) => (
              <div key={index} className="text-center mx-20 px-4">
                <img
                  src={contributor.imageSrc}
                  alt={`User ${index}`}
                  className="h-52 rounded-full mx-auto"
                />
                <p className="text-center font-semibold text-xl mt-2">
                  {contributor.name}
                </p>
                <p className="text-center font-semibold text-[#028ABE] text-lg">
                  {contributor.designation}
                </p>
              </div>
            ))}
          </div>

          {/* Research Team Section */}
          <h1 className="mt-20 text-center font-bold text-3xl">
            Research Team
          </h1>
          <div className="mt-8 flex justify-center">
            {researchTeam.map((contributor, index) => (
              <div key={index} className="text-center mx-4 px-4">
                <img
                  src={contributor.imageSrc}
                  alt={`User ${index}`}
                  className="h-52 rounded-full mx-auto"
                />
                <p className="text-center font-semibold text-xl mt-2">
                  {contributor.name}
                </p>
                <p className="text-center font-semibold text-[#028ABE] text-lg">
                  {contributor.designation}
                </p>
              </div>
            ))}
          </div>

          {/* Team Members Section */}
          <h1 className="mt-20 text-center font-bold text-3xl">Team Members</h1>
          <div className="mt-8 flex justify-center">
            {teamMembers.map((contributor, index) => (
              <div key={index} className="text-center mx-10 px-4">
                <img
                  src={contributor.imageSrc}
                  alt={`User ${index}`}
                  className="h-52 rounded-full mx-auto"
                />
                <p className="text-center font-semibold text-xl mt-2">
                  {contributor.name}
                </p>
                <p className="text-center font-semibold text-[#028ABE] text-lg">
                  {contributor.designation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-[#024481] mt-32 h-60 grid grid-cols-2 gap-10 place-items-center text-white">
        <div>
          <p className="text-lg font-semibold mb-2">Contact Us</p>
          <p>cybersec@iiita.ac.in</p>
          <p>0532-2922 000</p>
          <p>
            IIIT Rd, Indian Institute of Information Technology, Jhalwa,
            Prayagraj, Saha Urf Pipalgaon, Uttar Pradesh
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold mb-2">Important Links</p>
          <div>
            <p>
              <a href="https://www.iiita.ac.in">iiita.ac.in</a>
            </p>
            <p>
              <a href="https://assic.iiita.ac.in">assic.iiita.ac.in</a>
            </p>
            <p>
              <a href="https://erp.iiita.ac.in">erp.iiita.ac.in</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
