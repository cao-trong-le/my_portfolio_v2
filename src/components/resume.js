/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import styled, {css} from "styled-components";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ResumeViewer = (props) => {
    // const [isClose, setIsClose] = useState(props.isClose);

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            printPlugin: {
                enableShortcuts: false,
            },
            zoomPlugin: {
                enableShortcuts: true,
            },
        },
    });

    // const closeResumeModal = () => {
    //     setIsClose(!isClose);
    //     console.log(isClose);
    // }

    return (
        <ResumeSection 
            className="resume-section"
            // style={{
            //     display: isClose ? "none" : "initial",
            // }}
        >
            {/* {console.log(isClose)} */}
            <div className="resume-modal-title">
                <h1>My Resume</h1>
            </div>

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.js">
                <div
                    style={{
                        height: '720px',
                        width: '100%',
                    }}
                >
                    <Viewer
                        fileUrl='Cao_Resume.pdf'
                        initialPage={3}
                        theme='dark'
                        plugins={[
                            defaultLayoutPluginInstance,
                        ]}
                    />
                </div>
            </Worker>
        </ResumeSection>
    );
};

const ResumeSection = styled.div`
    background-color: rgba(38, 38, 38, 0.5);
    position: fixed;
    top: 0px;
    height: 100vh;
    width: 100%;
    color: black;
    z-index: 1;
    
    div.resume-modal-title {
        background-color: rgb(38, 38, 38);
        position: relative;

        h1 {
            color: white;
            padding: 10px 0;
        }
    }
`;

export default ResumeViewer;