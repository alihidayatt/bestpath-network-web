import React from "react";
import Mikrotik_ico from "../icon-component/mikrotik_ico";
import Juniper_jncia_ico from "../icon-component/juniper_jncia_ico";
import Juniper_ico from "../icon-component/juniper_ico";
import Mikrotik_mtcna_ico from "../icon-component/mikrotik_mtcna_ico";
import Mikrotik_mtcre_ico from "../icon-component/mikrotik_mtcre_ico";
import Cisco_ico from "../icon-component/cisco_ico";
import Cisco_ccna_ico from "../icon-component/cisco_ccna_ico";
import Cisco_ccnp_ico from "../icon-component/cisco_ccnp_ico";
import Juniper_jncis_ico from "../icon-component/juniper_jncis_ico";
import H3c_ico from "../icon-component/h3c_ico";
import H3c_ne_ico from "../icon-component/h3c_ne_ico";
import H3c_se_ico from "../icon-component/h3c_se_ico";
import Training_1_img from "../icon-component/training_1_img";
import Training_2_img from "../icon-component/training_2_img";
import Training_3_img from "../icon-component/training_3_img";
import See_all_button from "../button/See_all_button";
import Osdcs_ico from "../icon-component/osdcs_ico";
import Osns_ico from "../icon-component/osns_ico";
import Inhouse_training_ico from "../icon-component/inhouse_training";

export default function Our_services() {
  return (
    <>
      <div className="container mx-auto px-6 py-6">
        <div className="w-full h-full bg-white shadow-lg p-3 ">
          <div className="flex justify-items-center justify-center justify-self-center">
            <h1 className="text-xl font-medium italic text-bluegreen">
              TRAINING & EDUCATION
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="w-1/4 bg-white h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <Mikrotik_ico />
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1 ">
                  <Mikrotik_mtcna_ico />
                </div>
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1 justify-items-center justify-center justify-self-center">
                  <Mikrotik_mtcre_ico />
                </div>
              </div>
            </div>
            <div className="w-1/4 bg-white h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <Cisco_ico />
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1">
                  <Cisco_ccna_ico />
                </div>
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1">
                  <Cisco_ccnp_ico />
                </div>
              </div>
            </div>
            <div className="w-1/4 white h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <Juniper_ico />
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1">
                  <Juniper_jncia_ico />
                </div>
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1">
                  <Juniper_jncis_ico />
                </div>
              </div>
            </div>
            <div className="w-1/4 bg-white h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <H3c_ico />
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="flex w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1">
                  <H3c_ne_ico />
                </div>
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="flex w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1">
                  <H3c_se_ico />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex w-1/3 bg-white h-auto justify-items-center justify-center justify-self-center">
              <div className="w-[300px] h-[300px] bg-white rounded-[50%] my-3 p-2 shadow-custom1">
                <Training_1_img />
              </div>
            </div>
            <div className="flex w-1/3 bg-white h-auto justify-items-center justify-center justify-self-center">
              <div className="w-[300px] h-[300px] bg-white rounded-[50%] my-3 p-2 shadow-custom1">
                <Training_2_img />
              </div>
            </div>
            <div className="flex w-1/3 bg-white h-auto justify-items-center justify-center justify-self-center">
              <div className="w-[300px] h-[300px] bg-white rounded-[50%] my-3 p-2 shadow-custom1">
                <Training_3_img />
              </div>
            </div>
          </div>
          <div className="flex justify-items-center justify-center justify-self-center mt-10 mb-5">
            <See_all_button />
          </div>
        </div>
        {/* CONSULTATION CONTENT */}
        <div className="w-full h-full bg-white shadow-lg p-3 mt-3">
          <div className="flex justify-items-center justify-center justify-self-center">
            <h1 className="text-xl font-medium italic text-bluegreen">
              CONSULTATION
            </h1>
          </div>
          <div className="flex flex-row my-5 mx-20">
            <div className="flex w-1/3 flex-col bg-white h-auto justify-items-center justify-center justify-self-center">
              <div className="flex  justify-items-center justify-center justify-self-center">
                <div className="w-[300px] h-[300px] bg-white rounded-[50%] my-3 p-2 shadow-custom1">
                  <Osdcs_ico />
                </div>
              </div>
              <div>
                <div className="flex flex-col  text-bluegreen text-lg font-semibold justify-items-center justify-center justify-self-center mt-3">
                  <span className="flex justify-items-center justify-center justify-self-center">
                    <p>One Stop Solution</p>
                  </span>
                  <span className="flex justify-items-center justify-center justify-self-center">
                    <p>Data Center</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-1/3 flex-col bg-white h-auto justify-items-center justify-center justify-self-center">
              <div className="flex  justify-items-center justify-center justify-self-center">
                <div className="w-[300px] h-[300px] bg-white rounded-[50%] my-3 p-2 shadow-custom1">
                  <Inhouse_training_ico />
                </div>
              </div>
              <div>
                <div className="flex flex-col  text-bluegreen text-lg font-semibold justify-items-center justify-center justify-self-center mt-3">
                  <span className="flex justify-items-center justify-center justify-self-center">
                    <p>Inhouse Training</p>
                  </span>
                  <span className="flex justify-items-center justify-center justify-self-center">
                    <p></p>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-1/3 flex-col bg-white h-auto justify-items-center justify-center justify-self-center">
              <div className="flex  justify-items-center justify-center justify-self-center">
                <div className="w-[300px] h-[300px] bg-white rounded-[50%] my-3 p-2 shadow-custom1">
                  <Osns_ico />
                </div>
              </div>
              <div>
                <div className="flex flex-col  text-bluegreen text-lg font-semibold justify-items-center justify-center justify-self-center mt-3">
                  <span className="flex justify-items-center justify-center justify-self-center">
                    <p>One Stop Network</p>
                  </span>
                  <span className="flex justify-items-center justify-center justify-self-center">
                    <p>Solution</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS */}

        <div className="w-full h-full bg-white shadow-lg p-3 mt-3">
          <div className="flex justify-items-center justify-center justify-self-center">
            <h1 className="text-xl font-medium italic text-bluegreen">
              PROJECTS
            </h1>
          </div>
          <div className="grid mb-4 border border-gray-200 rounded-lg shadow-sm dark:border-bluegreen md:mb-4 md:grid-cols-3 bg-white dark:bg-bluegreen mx-20 mt-3">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-bluegreen dark:border-white">
              <blockquote className="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-white">
                <div className="flex justify-items-center justify-center justify-self-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    className="fill-white w-[75px] h-[75px]"
                  >
                    <path d="M18.8 25.8H15c.1 1.8.7 3.4 1.6 4.8.8-.4 1.7-.8 2.7-1.1-.3-1.2-.5-2.4-.5-3.7zm.4-5.3c-1-.3-1.9-.7-2.7-1.1-.9 1.4-1.5 3-1.6 4.8h3.8c.1-1.3.3-2.5.5-3.7zm-1.7 11.3c1 1.2 2.3 2.1 3.8 2.7-.7-1-1.3-2.2-1.7-3.6-.8.3-1.5.5-2.1.9zm3.8-16.3c-1.5.6-2.8 1.5-3.8 2.7.6.3 1.3.6 2.1.9.4-1.4 1-2.6 1.7-3.6zm-.2 4c1 .2 2.1.3 3.2.4V15c-1.3.5-2.5 2.1-3.2 4.5zm-.8 4.8h4v-2.9c-1.2 0-2.4-.2-3.6-.4-.2.9-.4 2-.4 3.3zm.4 4.8c1.1-.2 2.3-.4 3.6-.4v-2.9h-4c0 1.2.2 2.3.4 3.3zm3.6 5.9v-4.9c-1.1 0-2.2.2-3.2.4.7 2.5 1.9 4 3.2 4.5zm1.5-4.8V35c1.2-.5 2.4-2.1 3.2-4.5-1.1-.2-2.1-.3-3.2-.3zm0-15.2v4.9c1.1 0 2.2-.2 3.2-.4-.8-2.4-2-4-3.2-4.5zm3.9 10.8h-4v2.9c1.2 0 2.4.2 3.6.4.2-1 .4-2.1.4-3.3zm-.4-4.9c-1.1.2-2.3.4-3.6.4v2.9h4c0-1.2-.2-2.3-.4-3.3zm-.6 13.6c1.5-.6 2.8-1.5 3.8-2.7-.6-.3-1.4-.6-2.1-.9-.4 1.4-1 2.6-1.7 3.6zm3.8-16.3c-1.1-1.2-2.4-2.1-3.8-2.7.7.9 1.3 2.2 1.7 3.6.8-.3 1.5-.5 2.1-.9zm-1.7 11.3c1 .3 1.9.7 2.7 1.1.9-1.4 1.5-3 1.6-4.8h-3.8c-.1 1.3-.3 2.5-.5 3.7zm0-9c.2 1.2.4 2.4.4 3.7H35c-.1-1.8-.7-3.4-1.6-4.8-.8.5-1.6.9-2.6 1.1z" />
                    <path d="M25 10.5c-7.9 0-14.4 6.5-14.4 14.5S17 39.5 25 39.5c7.9 0 14.4-6.5 14.4-14.5S32.9 10.5 25 10.5zM34.3 32s-.1 0 0 0c-2.2 2.9-5.5 4.7-9.3 4.7-3.8 0-7.1-1.8-9.2-4.6-1.4-2-2.3-4.4-2.3-7s.9-5 2.3-7c2.1-2.8 5.5-4.6 9.2-4.6 3.8 0 7.1 1.8 9.2 4.6 1.4 2 2.3 4.4 2.3 7s-.8 4.9-2.2 6.9z" />
                    <path d="M47.2 21.7c-.6-.6-1.3-1.1-2.2-1.2-1.2-.2-2.3-1-2.8-2.2-.1-.3-.2-.6-.3-.8-.2-.5-.3-.9-.3-1.4 0-.8.2-1.5.7-2.1 1-1.4.9-3.5-.4-4.7L40.6 8c-1.3-1.3-3.2-1.4-4.7-.4-1 .8-2.3.9-3.5.4-.3-.1-.5-.2-.8-.3-1.2-.5-2-1.5-2.2-2.8-.3-1.8-1.8-3.1-3.5-3.1h-1.8c-1.8 0-3.3 1.3-3.5 3.1-.2 1.3-1 2.3-2.2 2.8-.3.1-.5.2-.8.3-.4.2-.9.3-1.4.3-.8 0-1.5-.2-2.1-.7-1.4-1.1-3.4-.9-4.7.4L8.1 9.2c-.7.7-1.1 1.6-1.1 2.6 0 .8.2 1.5.7 2.2.7 1 .9 2.4.4 3.5-.1.2-.2.5-.3.8-.5 1.2-1.5 2-2.8 2.2-1.8.3-3.1 1.8-3.1 3.6v1.8c0 1.8 1.3 3.3 3.1 3.6 1.3.2 2.3 1 2.8 2.2.1.3.2.6.3.8.5 1.2.3 2.5-.4 3.5-1.1 1.4-.9 3.4.4 4.7L9.4 42c.7.7 1.6 1.1 2.5 1.1.8 0 1.5-.2 2.1-.7 1-.8 2.4-.9 3.5-.4.3.1.5.2.8.3 1.2.5 2 1.5 2.2 2.8.3 1.8 1.8 3.1 3.5 3.1h1.8c1.8 0 3.3-1.3 3.5-3.1.2-1.3 1-2.3 2.2-2.8.3-.1.6-.2.8-.3 1.2-.5 2.5-.3 3.5.4 1.4 1 3.4.9 4.7-.4l1.3-1.3c.7-.7 1.1-1.6 1.1-2.6 0-.8-.2-1.5-.7-2.2-.8-1-.9-2.4-.4-3.5.1-.3.2-.5.3-.8.5-1.2 1.5-2 2.8-2.2 1.8-.3 3-1.8 3-3.6v-1.9c.2-.7-.2-1.6-.7-2.2zM25 41c-8.8 0-15.9-7.2-15.9-16S16.3 9 25 9c8.8 0 15.9 7.2 15.9 16S33.8 41 25 41z" />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  BUILD
                </h3>
                <p className="my-4">Maintenance</p>
                <p className="my-4">On-Site Support</p>
                <p className="my-4">Monitoring</p>
                <p className="my-4">Help Desk</p>
                <p className="my-4">Assessment</p>
                <p className="my-4">Implement</p>
              </blockquote>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-bluegreen dark:border-white">
              <blockquote className="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-white">
                <div className="flex justify-items-center justify-center justify-self-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 64 64"
                    className="fill-white w-[75px] h-[75px]"
                  >
                    <path d="M11.636 29.075a11.905 11.905 0 0 0-6.258 21.06A3.194 3.194 0 0 1 6.5 52.634v4.795A5.608 5.608 0 0 0 12.131 63h1.738a5.608 5.608 0 0 0 5.631-5.571v-4.795a3.304 3.304 0 0 1 1.188-2.553 11.874 11.874 0 0 0 .343-18.015 12.101 12.101 0 0 0-9.395-2.99zM8.5 57.43V57h9v.429a3.48 3.48 0 0 1-.059.571H8.56a3.48 3.48 0 0 1-.059-.571zM12.131 61a3.644 3.644 0 0 1-2.508-1h6.754a3.644 3.644 0 0 1-2.508 1zm7.566-27.444a9.874 9.874 0 0 1-.287 14.986 5.3 5.3 0 0 0-1.91 4.092V55H14v-6a1.002 1.002 0 0 0-.375-.781L9.29 44.752a.771.771 0 0 1-.29-.604v-.377A.772.772 0 0 1 9.771 43h.28a.771.771 0 0 1 .643.344 2.771 2.771 0 0 0 4.612 0 .771.771 0 0 1 .642-.344h.28a.772.772 0 0 1 .772.771v.496a.764.764 0 0 1-.226.545l-2.481 2.481 1.414 1.414 2.48-2.48a2.753 2.753 0 0 0 .813-1.96v-.496A2.774 2.774 0 0 0 16.229 41h-.28a2.767 2.767 0 0 0-2.307 1.234.772.772 0 0 1-1.284 0A2.767 2.767 0 0 0 10.052 41h-.28A2.774 2.774 0 0 0 7 43.771v.377a2.762 2.762 0 0 0 1.04 2.165L12 49.48V55H8.5v-2.366a5.18 5.18 0 0 0-1.855-4.046 9.956 9.956 0 1 1 13.052-15.032zM42 22h-3a4 4 0 0 0-8 0h-3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a4 4 0 0 0 0-8v-3a1 1 0 0 0-1-1zm3 8a2.002 2.002 0 0 1-2 2h-1a1 1 0 0 0-1 1v3h-2a4 4 0 0 0-8 0h-2V24h3a1 1 0 0 0 1-1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h1a2.002 2.002 0 0 1 2 2z" />
                    <path d="M62 22.186h-1.89a.904.904 0 0 1-.879-.647 23.984 23.984 0 0 0-2.236-5.39.907.907 0 0 1 .162-1.083l1.34-1.34a1 1 0 0 0 0-1.413l-6.81-6.81a1.03 1.03 0 0 0-1.414 0l-1.34 1.34a.906.906 0 0 1-1.08.162 24.043 24.043 0 0 0-5.393-2.237.903.903 0 0 1-.645-.878V2a1 1 0 0 0-1-1h-9.63a1 1 0 0 0-1 1v1.89a.903.903 0 0 1-.646.878 24.055 24.055 0 0 0-5.391 2.237.91.91 0 0 1-1.082-.161l-1.339-1.34a1 1 0 0 0-1.414 0l-6.81 6.809a1 1 0 0 0 0 1.414l1.34 1.34a.908.908 0 0 1 .162 1.081 23.963 23.963 0 0 0-2.236 5.391.904.904 0 0 1-.879.647H10a1 1 0 0 0-1 1V28h2v-3.814h.89a2.91 2.91 0 0 0 2.805-2.112 21.995 21.995 0 0 1 2.051-4.941 2.912 2.912 0 0 0-.489-3.48l-.632-.633 5.395-5.395.632.633a2.909 2.909 0 0 0 3.481.487 22.024 22.024 0 0 1 4.94-2.05 2.909 2.909 0 0 0 2.112-2.805V3h7.63v.89a2.909 2.909 0 0 0 2.11 2.805 22.012 22.012 0 0 1 4.942 2.05 2.911 2.911 0 0 0 3.48-.487l.633-.633 5.396 5.395-.634.632a2.912 2.912 0 0 0-.488 3.48 22.015 22.015 0 0 1 2.05 4.942 2.91 2.91 0 0 0 2.806 2.112H61v7.628h-.89a2.91 2.91 0 0 0-2.805 2.112 21.995 21.995 0 0 1-2.051 4.941 2.912 2.912 0 0 0 .489 3.48l.632.633-5.395 5.395-.632-.633a2.911 2.911 0 0 0-3.481-.487 22.024 22.024 0 0 1-4.94 2.05 2.909 2.909 0 0 0-2.112 2.805V53h-7.63v-.89a2.909 2.909 0 0 0-2.11-2.805 22.012 22.012 0 0 1-4.942-2.05l-.985 1.74a24.043 24.043 0 0 0 5.392 2.237.903.903 0 0 1 .645.878V54a1 1 0 0 0 1 1h9.63a1 1 0 0 0 1-1v-1.89a.903.903 0 0 1 .646-.878 24.055 24.055 0 0 0 5.391-2.237.907.907 0 0 1 1.082.161l1.339 1.34a1 1 0 0 0 1.414 0l6.81-6.808a1 1 0 0 0 0-1.415l-1.34-1.34a.908.908 0 0 1-.162-1.081 23.963 23.963 0 0 0 2.237-5.391.904.904 0 0 1 .878-.647H62a1 1 0 0 0 1-1v-9.628a1 1 0 0 0-1-1Z" />
                    <path d="M36 47a19 19 0 1 0-19-19h2a16.99 16.99 0 1 1 8.5 14.727l-1.001 1.73A18.993 18.993 0 0 0 36 47Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ONE STOP SOLUTION
                </h3>
                <p className="my-4">Planing</p>
                <p className="my-4">Development</p>
                <p className="my-4">Monitoring</p>
                <p className="my-4">Controlling</p>
                <p className="my-4">Maintenance</p>
                <p className="my-4">Audit</p>
              </blockquote>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-bluegreen dark:border-white">
              <blockquote className="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-white">
                <div className="flex justify-items-center justify-center justify-self-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 80 80"
                    className="fill-white w-[75px] h-[75px]"
                  >
                    <path d="M40 19c-11.58 0-21 9.42-21 21 0 5.266 1.962 10.072 5.175 13.762a.976.976 0 0 0 .224.245C28.246 58.287 33.805 61 40 61s11.754-2.712 15.601-6.993a.976.976 0 0 0 .224-.245C59.038 50.072 61 45.266 61 40c0-11.58-9.42-21-21-21zm0 40c-5.543 0-10.524-2.4-14-6.2v-1.81c0-4.962 4.038-9 9-9h4.817c.061.002.121.01.183.01s.122-.008.183-.01H45c4.962 0 9 4.038 9 9v1.81c-3.476 3.8-8.457 6.2-14 6.2zm.183-19.01h-.366C36.042 39.893 33 36.799 33 33c0-3.86 3.14-7 7-7s7 3.14 7 7c0 3.798-3.042 6.892-6.817 6.99zm15.78 10.276c-.362-5.523-4.81-9.936-10.348-10.244A8.983 8.983 0 0 0 49 33c0-4.962-4.038-9-9-9s-9 4.038-9 9a8.983 8.983 0 0 0 3.385 7.022c-5.538.308-9.986 4.72-10.348 10.244A18.87 18.87 0 0 1 21 40c0-10.477 8.523-19 19-19s19 8.523 19 19a18.87 18.87 0 0 1-3.037 10.266z" />
                    <path d="m74.1 36.005-6.491-.649a27.964 27.964 0 0 0-4.801-11.596l4.129-5.047a1 1 0 0 0-.067-1.34l-4.243-4.243a1 1 0 0 0-1.34-.067l-5.047 4.13a27.964 27.964 0 0 0-11.596-4.802l-.649-6.49A1 1 0 0 0 43 5h-6a1 1 0 0 0-.995.9l-.649 6.491a27.964 27.964 0 0 0-11.596 4.801l-5.047-4.129a.999.999 0 0 0-1.34.067l-4.243 4.243a1 1 0 0 0-.067 1.34l4.13 5.047a27.964 27.964 0 0 0-4.802 11.596l-6.49.649A1 1 0 0 0 5 37v6a1 1 0 0 0 .9.995l6.491.649a27.964 27.964 0 0 0 4.801 11.596l-4.129 5.047a1 1 0 0 0 .067 1.34l4.243 4.243a1 1 0 0 0 1.34.067l5.047-4.13a27.97 27.97 0 0 0 11.596 4.802l.649 6.49A1 1 0 0 0 37 75h6a1 1 0 0 0 .995-.9l.649-6.491a27.97 27.97 0 0 0 11.596-4.801l5.047 4.129a.998.998 0 0 0 1.34-.067l4.243-4.243a1 1 0 0 0 .067-1.34l-4.13-5.047a27.964 27.964 0 0 0 4.802-11.596l6.49-.649A1 1 0 0 0 75 43v-6a1 1 0 0 0-.9-.995zm-1.1 6.09-6.362.636a1 1 0 0 0-.89.858 25.955 25.955 0 0 1-5.002 12.08 1 1 0 0 0 .023 1.238l4.047 4.946-2.963 2.963-4.946-4.047a.999.999 0 0 0-1.237-.024 25.949 25.949 0 0 1-12.08 5.002 1 1 0 0 0-.859.891L42.095 73h-4.19l-.636-6.362a1 1 0 0 0-.858-.89 25.949 25.949 0 0 1-12.08-5.003 1 1 0 0 0-1.238.024l-4.946 4.047-2.963-2.963 4.047-4.946a1 1 0 0 0 .023-1.237 25.955 25.955 0 0 1-5.001-12.08 1 1 0 0 0-.891-.859L7 42.095v-4.19l6.362-.636a1 1 0 0 0 .89-.858 25.955 25.955 0 0 1 5.002-12.08 1 1 0 0 0-.023-1.238l-4.047-4.946 2.963-2.963 4.946 4.047a1 1 0 0 0 1.237.023 25.955 25.955 0 0 1 12.08-5.001 1 1 0 0 0 .859-.891L37.905 7h4.19l.636 6.362a1 1 0 0 0 .858.89 25.955 25.955 0 0 1 12.08 5.002 1 1 0 0 0 1.238-.023l4.946-4.047 2.963 2.963-4.047 4.946a1 1 0 0 0-.023 1.237 25.955 25.955 0 0 1 5.001 12.08 1 1 0 0 0 .891.859l6.362.636v4.19z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  DEVELOPMENT
                </h3>
                <p className="my-4">Consultant</p>
                <p className="my-4">IT Data Center</p>
                <p className="my-4">Data Center Facility</p>
                <p className="my-4">IT Enterprise Solution</p>
                <p className="my-4">Data Center Civil</p>
                <p className="my-4">‎ </p>
              </blockquote>
            </figure>
          </div>

          <div className="grid mb-2 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-2 md:grid-cols-2 bg-white dark:bg-gray-800 mx-20">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-bluegreen dark:border-white">
              <blockquote className="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-white">
                <div className="flex justify-items-center justify-center justify-self-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 64 64"
                    className="fill-white w-[75px] h-[75px]"
                  >
                    <path d="M57 6H8a5 5 0 0 0 0 10h49a5 5 0 0 0 0-10Z" />
                    <circle cx={44} cy={42} r={3} />
                    <path d="M53.6 50.73a6.18 6.18 0 0 0 4.4-5.92V21.94A1.94 1.94 0 0 0 56.06 20H7.94A1.94 1.94 0 0 0 6 21.94v22.87A6.19 6.19 0 0 0 12.19 51h22.07a11 11 0 0 1 4.39-4.49 7 7 0 1 1 10.7 0 11.21 11.21 0 0 1 4.25 4.22Zm-9.26-23.24L32.41 39.41a2 2 0 0 1-2.82 0L24 33.83l-7.59 7.58a2 2 0 0 1-2.93-.11 2.08 2.08 0 0 1 .2-2.8l8.91-8.91a2 2 0 0 1 2.82 0L31 35.17l10.59-10.58a2 2 0 0 1 3 .25 2.09 2.09 0 0 1-.25 2.65Z" />
                    <path d="M37 56.09S37.31 59 44 59c6.48 0 7-2.68 7-3a7 7 0 0 0-14 .05Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  TRAINING
                </h3>
                <p className="my-4">Soft Skill</p>
                <p className="my-4">Exam</p>
                <p className="my-4">Certification</p>
                <p className="my-4">‎ </p>
                <p className="my-4">‎ </p>
                <p className="my-4">‎ </p>
              </blockquote>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-bluegreen dark:border-white">
              <blockquote className="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-white">
                <div className="flex justify-items-center justify-center justify-self-center my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 64 64"
                    className="fill-white w-[75px] h-[75px]"
                  >
                    <path d="M5 60h14a1 1 0 0 0 1-1 8 8 0 0 0-16 0 1 1 0 0 0 1 1Z" />
                    <circle cx={12} cy={45} r={5} />
                    <path d="M24 59a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1 8 8 0 0 0-16 0Z" />
                    <circle cx={32} cy={45} r={5} />
                    <path d="M52 51a8 8 0 0 0-8 8 1 1 0 0 0 1 1h14a1 1 0 0 0 1-1 8 8 0 0 0-8-8Z" />
                    <circle cx={52} cy={45} r={5} />
                    <circle cx={13} cy={9} r={5} />
                    <path d="M5 27h3v10a1 1 0 0 0 1 1h3V28a1 1 0 0 1 2 0v10h3a1 1 0 0 0 1-1V21h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H8a4 4 0 0 0-4 4v7a1 1 0 0 0 1 1Z" />
                    <path d="M59 4H21a1 1 0 0 0-1 1v9h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5v9a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-6 22H43a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Zm0-7H29a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2Zm0-7H27a1 1 0 0 1 0-2h26a1 1 0 0 1 0 2Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  CLASSROOM
                </h3>
                <p className="my-4">In House Training</p>
                <p className="my-4">Online Training</p>
                <p className="my-4">‎ </p>
                <p className="my-4">‎ </p>
                <p className="my-4">‎ </p>
                <p className="my-4">‎ </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
