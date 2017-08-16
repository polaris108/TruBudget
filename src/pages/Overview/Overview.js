import React from 'react';

import ProjectCreationDialog from './ProjectCreationDialog';
import OverviewTable from './OverviewTable';
import strings from '../../localizeStrings'
const Overview = (props) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <ProjectCreationDialog title={strings.project.add_new_project} {...props} numberOfSteps={4} />
    <OverviewTable {...props} />
  </div>
);

export default Overview;
