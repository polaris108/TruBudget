import React from 'react';
import Divider from 'material-ui/Divider';

import strings from '../../localizeStrings'
import ImageSelector from '../Common/ImageSelector';
import Budget from '../Common/Budget';
import Identifier from '../Common/Identifier';



const ProjectCreationContent = (props) => {
  return (
    <div>
      <div>
        <Identifier
          nameLabel={strings.project.project_title}
          nameHintText={strings.project.project_title_description}
          name={props.projectName}
          nameOnChange={props.storeProjectName}
          commentLabel={strings.project.project_comment}
          commentHintText={strings.common.comment_description}
          comment={props.projectComment}
          commentOnChange={props.storeProjectComment} />
      </div>
      <Divider />
      <div >
        <Budget
          currencyTitle={strings.project.project_currency}
          currency={props.projectCurrency}
          storeCurrency={props.storeProjectCurrency}
          budgetLabel={strings.project.project_budget_amount}
          budgetHintText={strings.common.project_budget_amount_description}
          budget={props.projectAmount}
          storeBudget={props.storeProjectAmount}
        />
      </div>
      <Divider />
      <ImageSelector onTouchTap={props.storeProjectThumbnail} selectedImage={props.projectThumbnail} />
    </div >
  )

}

export default ProjectCreationContent;