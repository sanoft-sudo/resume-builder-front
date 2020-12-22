import React from 'react';
import "../../styles/CreateResumeMain.css";
import CreateResumeAcardion from './resumeAcardion/CreateResumeAcardion';
import TemplateTwo from "../../templates/TemplateTwo"
import ColorPicker from './ColorPicker';


function CreateResumeMain() {
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <TemplateTwo/>
                </div>
                <div className="col-md-4">
                    <ColorPicker/>
                    <CreateResumeAcardion/>
                </div>
            </div>
        </div>
    )
}

export default CreateResumeMain;
