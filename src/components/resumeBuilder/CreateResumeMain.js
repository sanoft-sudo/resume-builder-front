import React from 'react';
import "../../styles/CreateResumeMain.css";
import CreateResumeAcardion from './resumeAcardion/CreateResumeAcardion';
import TemplateTwo from "../../templates/TemplateTwo"
import ColorPicker from './ColorPicker';
import TabForTemplates from './tab/TabForTemplates';


function CreateResumeMain() {
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col">
                            <TabForTemplates/>
                        </div>
                    </div>
                    
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
