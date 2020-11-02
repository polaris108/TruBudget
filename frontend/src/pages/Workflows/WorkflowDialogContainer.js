import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { connect } from "react-redux";

import { toJS } from "../../helper";
import withInitialLoading from "../Loading/withInitialLoading";
import { storeSnackbarMessage } from "../Notifications/actions";
import {
  createWorkflowItem,
  editWorkflowItem,
  hideWorkflowDialog,
  setCurrentStep,
  storeWorkflowAmount,
  storeWorkflowAmountType,
  storeWorkflowComment,
  storeWorkflowCurrency,
  storeWorkflowDocument,
  storeWorkflowName,
  storeWorkflowStatus,
  storeWorkflowDueDate,
  storeWorkflowExchangeRate,
  storeWorkflowitemType,
  defaultWorkflowExchangeRate,
  storeWorkflowItemsAssignee
} from "./actions";
import WorkflowDialog from "./WorkflowDialog";

const styles = {};

class WorkflowDialogContainer extends Component {
  createWorkflowItem = (
    displayName,
    amount,
    exchangeRate,
    amountType,
    currency,
    description,
    status,
    workflowDocuments,
    dueDate,
    workflowitemType
  ) => {
    const path = this.props.location.pathname.split("/");
    const projectId = path[2];
    const subProjectId = path[3];
    this.props.createItem(
      projectId,
      subProjectId,
      displayName,
      amount,
      exchangeRate,
      amountType,
      currency,
      description,
      status,
      workflowDocuments,
      dueDate,
      workflowitemType
    );
  };

  render() {
    return (
      <WorkflowDialog
        createWorkflowItem={this.createWorkflowItem}
        onDialogCancel={this.props.hideWorkflowDialog}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    workflowToAdd: state.getIn(["workflow", "workflowToAdd"]),
    creationDialogShown: state.getIn(["workflow", "creationDialogShown"]),
    editDialogShown: state.getIn(["workflow", "editDialogShown"]),
    dialogTitle: state.getIn(["workflow", "dialogTitle"]),
    workflowItems: state.getIn(["workflow", "workflowItems"]),
    currentStep: state.getIn(["workflow", "currentStep"]),
    currency: state.getIn(["workflow", "currency"]),
    subProjectCurrency: state.getIn(["workflow", "subProjectCurrency"]),
    currentUser: state.getIn(["login", "id"]),
    users: state.getIn(["login", "enabledUsers"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createItem: (
      projectId,
      subprojectId,
      displayName,
      amount,
      exchangeRate,
      amountType,
      currency,
      description,
      status,
      documents,
      dueDate,
      workflowitemType
    ) =>
      dispatch(
        createWorkflowItem(
          projectId,
          subprojectId,
          displayName,
          amount,
          exchangeRate,
          amountType,
          currency,
          description,
          status,
          documents,
          dueDate,
          workflowitemType
        )
      ),
    editWorkflowItem: (pId, sId, wId, changes) => dispatch(editWorkflowItem(pId, sId, wId, changes)),
    storeWorkflowComment: comment => dispatch(storeWorkflowComment(comment)),
    storeWorkflowCurrency: currency => dispatch(storeWorkflowCurrency(currency)),
    storeWorkflowAmount: amount => dispatch(storeWorkflowAmount(amount)),
    storeWorkflowExchangeRate: rate => dispatch(storeWorkflowExchangeRate(rate)),
    storeWorkflowAmountType: type => dispatch(storeWorkflowAmountType(type)),
    storeWorkflowName: name => dispatch(storeWorkflowName(name)),
    storeWorkflowStatus: state => dispatch(storeWorkflowStatus(state)),
    storeWorkflowDueDate: dueDate => dispatch(storeWorkflowDueDate(dueDate)),
    storeWorkflowitemType: workflowitemType => dispatch(storeWorkflowitemType(workflowitemType)),
    hideWorkflowDialog: () => dispatch(hideWorkflowDialog()),
    setCurrentStep: step => dispatch(setCurrentStep(step)),
    storeSnackbarMessage: message => dispatch(storeSnackbarMessage(message)),
    storeWorkflowDocument: (payload, name, fileName) => dispatch(storeWorkflowDocument(payload, name, fileName)),
    defaultWorkflowExchangeRate: exchangeRate => dispatch(defaultWorkflowExchangeRate(exchangeRate)),
    storeWorkflowItemsAssignee: assignee => dispatch(storeWorkflowItemsAssignee(assignee))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withInitialLoading(withStyles(styles)(toJS(WorkflowDialogContainer))));
