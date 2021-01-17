import React from 'react';
import "../../styles/CreateResumeMain.css";
import CreateResumeAcardion from './resumeAcardion/CreateResumeAcardion';
import TemplateTwo from "../../templates/TemplateTwo"
import ColorPicker from './ColorPicker';
import TabForTemplates from './tab/TabForTemplates';
import TabForResumeAndObjective from './tab/TabForResumeAndObjective';


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
                    <TabForResumeAndObjective/>
                </div>
            </div>
        </div>
    )
}

export default CreateResumeMain;
