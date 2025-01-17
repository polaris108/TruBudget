const de = {
  format: {
    currencyPositon: "%v %s",
    numberFormat: {
      decimal: ",",
      thousand: ".",
      precision: 2
    },
    dateFormat: "dd/MM/yyyy",
    datePlaceholder: "dd/mm/yyyy",
    // numberRegex describes values with "," as decimal separator (matches e.g. 1000; 1.000; 1000,00; 1.000,00)    numberRegex: /^([0-9]{1,3}.([0-9]{3}.)*[0-9]{3}|[0-9]+)(,[0-9]+)?$/
    numberRegex: /^([0-9]{1,3}.([0-9]{3}.)*[0-9]{3}|[0-9]+)(,[0-9]+)?$/
  },
  common: {
    action: "German: Action",
    actions: "Actions",
    add: "Hinzufügen",
    added: "German: Added",
    additional_data: "Zusätzliche Daten",
    amount: "Betrag",
    approver: "Approver",
    assign: "German: assign",
    assigned: "Assigned",
    assigned_budget: "Assigned Budget",
    assignees: "Assignee(s)",
    back: "Back",
    bank: "Bank",
    budget: "Budget",
    budget_distribution: "Budget distribution",
    no_budget_distribution: "Verteilung kann nicht angezeigt werden, da nicht alle Elemente sichtbar sind",
    no_disabled_users: "Keine deaktivierten Benutzer gefunden",
    cancel: "Abbrechen",
    close: "Schließen",
    closed: "German: Closed",
    comment: "Kommentar",
    comment_description: "Add some comments",
    completion: "German: Completion",
    confirm: "Bestätigen",
    create: "German: Create",
    created: "Created",
    currency: "Währung",
    disbursed_budget: "Ausgezahltes Budget",
    disbursement: "Auszahlung",
    disconnected: "Offline",
    display_name: "Anzeige-Name",
    done: "Done",
    download: "Download",
    edit: "German: Edit",
    edited: "German: Edited",
    email: "Email",
    finish: "Finish",
    global: "Global",
    grant: "German: grant",
    hash: "Hash",
    history: "History",
    workflowitem_history: "Workflowitem History",
    subproject_history: "Subprojekt History",
    project_history: "Projekt History",
    in_progress: "In Progress",
    in_review: "In Review",
    incorrect_password: "Falsches Passwort",
    incorrect_username: "Unbekannte Login-ID",
    incorrect_username_or_password: "Ungültige Login-ID oder falsches Passwort",
    next: "Next",
    no_budget: "Kein Budget gefunden",
    no_budget_project: "Um ein Budget für Ihr Projekt hinzuzufügen, gehen Sie zurück zur Hauptseite.",
    no_budget_subproject:
      "Um ein Budget für Ihr Teilprojekt hinzuzufügen, gehen Sie zurück zur Übersichtsseite Ihrer Teilprojekte.",
    no_groups: "Keine Gruppen gefunden",
    no_groups_text: "Erstellen Sie eine neue Gruppe, indem Sie auf das Plus drücken.",
    no_items_text: "Sie können einen neuen Eintrag erstellen, indem Sie auf das Plus drücken.",
    no_documents: "Keine Dokumente gefunden",
    no_documents_upload_text: "Sie können einen hinzufügen, indem Sie auf den Upload Button klicken",
    no_documents_info_text: "Sie können das Workflow-Item bearbeiten, um Dokumente hinzuzufügen",
    no_nodes: "Keine Anfragen für zusätzliche Nodes gefunden",
    no_notifications: "Keine Benachrichtigungen gefunden",
    no_organizations: "Keine Anfragen für neue Organisationen gefunden",
    no_resources: "Keine Daten zu ausgewählter Ressource hinzugefügt",
    no_subprojects: "Keine Subprojects gefunden",
    no_users: "Keine Users gefunden",
    no_users_text: "Fügen Sie neue Users hinzu, indem Sie auf das Plus drücken.",
    no_workflow_items: "Keine Workflow-Items gefunden",
    not_assigned: "Not assigned",
    not_assigned_budget: "Not Assigned Budget",
    not_projected: "Nicht projiziert",
    not_disbursed: "Nicht ausgezahlt",
    not_ok: "NOK",
    ok: "Ok",
    open: "Open",
    organization: "Organisation",
    password: "Passwort",
    permission: "Berechtigung",
    project: "German: Project",
    projected_budget: "Planbudget",
    projected_budget_exists: "Planbudget existiert bereits",
    redacted: "Redigiert",
    reset: "Zurücksetzen",
    revoke: "German: revoke",
    reject: " Ablehnen",
    rejected: "Abgelehnt",
    search: "German: Search",
    show_permissions: "German: Show Permissions",
    status: "Status",
    submit: "Submit",
    subproject: "Subproject",
    subprojects: "Subprojects",
    tag: "Tag",
    add_tag_text: "Tag zum Projekt hinzufügen",
    tag_already_exists: "Tag existiert bereits!",
    invalid_tag: "Ungültiger Tag",
    invalid_format: "Ungültiges Format",
    task_status: "Task status",
    total_budget: "Gesamt Budget",
    thumbnail: "German: Thumbnail",
    type: "Typ",
    update: "German: Update",
    username: "Login-ID",
    id: "German: Id",
    name: "German: Name",
    view: "German: View",
    workflowitem: "German: WorkflowItem",
    history_end: "Keine weiteren Ereignisse",
    no_history: "Keine Ereignisse",
    dueDate: "Fälligkeitsdatum",
    dueDate_exceeded: "Fälligkeitsdatum überschritten",
    login_disabled: "Login-ID ist deaktiviert",
    login_data_error: "Login-ID oder Passwort kann nicht leer sein",
    refresh_assignments: "Zuordnungen aktualisieren"
  },

  login: {
    environment: "Environment",
    loading: "German: Loading ...",
    login_button_title: "Login",
    production_env: "Prod",
    test_env: "Test",
    frontend_name: "TruBudget",
    frontend_description: "A blockchain-based solution for budget expenditure"
  },

  project: {
    add_new_project: "Add new project",
    assignee: "Verantwortlicher",
    project_authority_organization_search: "Search organizations",
    project_authority_role_search: "Search role",
    project_budget: "Budget",
    project_budget_amount: "Project budget amount",
    project_budget_amount_description: "z_B_",
    project_budget_authority_role: "Select budget authority role",
    project_budget_authority_role_description: "The authority enabled to modify the budget line of the project",
    project_close_info: "Mindestens ein Teilprojekt wurde noch nicht geschlossen.",
    project_comment: "Comment",
    project_currency: "Currency",
    project_details: "German: Details",
    project_disbursement_authority_role: "Wähle einen Auszahlungsbefugten",
    project_disbursement_authority_role_description: "The authorities enabled to approve financial transactions",
    project_edit_title: "German: Edit Project",
    project_implementing_authority_role: "Select implementation authority role",
    project_implementing_authority_role_description:
      "The authorities enabled to create and modify subprojects, define and execute workflow activities",
    project_name: "Name",
    project_permissions_title: "German: Set permissions for project",
    project_roles: "Roles",
    project_thumbnail: "German: Thumbnail",
    project_title: "Project title",
    project_title_description: "Name of the project",
    project_searchtext: "Projekte durchsuchen"
  },

  subproject: {
    assignee: "Verantwortlicher",
    fixed_workflowitem_type: "Fester Workflowitem Typ",
    subproject_add_title: "Add new Subproject",
    subproject_assigned_organization: "Assigned Organization",
    subproject_budget_amount: "Sub-project  budget amount",
    subproject_budget_amount_description: "z_B_",
    subproject_comment: "Sub-project Comment",
    subproject_completion_string: "{0} von {1} erledigt",
    subproject_currency: "German: Sub-project Currency",
    subproject_permissions_title: "German: Set permissions for subproject",
    subproject_preview: "German: Subproject Preview",
    subproject_close_info: "German: At least one workflowitem has not been closed yet.",
    subproject_close_not_allowed: "Sie haben keine Berechtigung das Projekt zu schließen",
    subproject_edit_title: "German: Edit Subproject",
    subproject_select_button: "Select",
    subproject_title: "Sub-Project title",
    subproject_title_description: "Name of the sub-project",
    subproject_searchtext: "Subprojekte durchsuchen",
    subproject_any_workflowitem_type: "Workflowitems erlauben, allgemeinen oder eingeschränkten Typ auszuwählen",
    subproject_general_workflowitem_type: "Nur Workflow-Elemente vom Typ 'general' zulassen",
    subproject_restricted_workflowitem_type:
      "Nur Workflow-Elemente vom Typ 'eingeschränkt' zulassen. Bei Zuweisung eines eingeschränkten Workflow-Items an einen anderen User werden Berechtigungen automatisch erteilt und entzogen. Der Zuweisende behält nur die Anzeigerechte.",
    workflowitem_assignee: "Vorausgewählter Verantwortlicher"
  },

  workflow: {
    assignee: "Assignee",
    add_item: "German: Create Workflowitem",
    approval_required: "German: Approval Required",
    edit_item: "German: Edit Workflowitem",
    exchange_rate: "Wechselkurs",
    non_approval: "German: Non-Approval",
    workflow_action_in_review: "Pending for review of",
    workflow_action_open_in_progress: "Pending on ",
    workflow_action_pending_approval: "Pending for approval of ",
    workflow_budget: "Budgetbetrag",
    workflow_budget_allocated: "allocated",
    workflow_budget_amount: " Workflow budget amount",
    workflow_budget_amount_description: "Budget amount for the workflow",
    workflow_budget_description: "z_B_",
    workflow_budget_disbursed: "ausgezahlt",
    workflow_budget_na: "Not applicable",
    workflow_budget_status_allocated: "Allocated",
    workflow_budget_status_disbursed: "Ausgezahlt",
    workflow_budget_status_na: "N/A",
    workflow_comment: "Workflow Comment",
    workflow_disable_sort: "Save",
    workflow_document_changed: "Changed",
    workflow_document_description: "Add name of document",
    workflow_document_name: "Document Name",
    workflow_document_validate: "Validate",
    workflow_document_validated: "Validated",
    workflow_document_validation_ok: "Identisches Dokument",
    workflow_document_validation_not_ok: "Unterschiedliches DoKument",
    workflow_documents: "Documents",
    workflow_enable_sort: "Sort",
    workflow_fingerprint: "German: Fingerprint",
    workflow_document_not_available: "Dokument ist nicht verfügbar",
    workflow_name: "Name",
    workflow_next_step: "Next step",
    workflow_no_actions: "No actions required",
    workflow_no_documents: "No documents",
    workflow_none: "None",
    workflow_permissions_title: "German: Set permissions for workflowitem",
    workflow_redacted: "German: Redacted",
    workflow_selection: "German: You have selected {0} workflows",
    workflow_submit_for_review: "Submit for Review",
    workflow_table_title: "Workflowitems",
    workflow_title: "Workflow title",
    workflow_title_description: "Name of the workflow",
    workflow_type: "Type",
    workflow_type_transaction: "Transaction",
    workflow_type_workflow: "Workflow",
    workflow_upload_document: "Upload",
    workflowitem_details: "Prozessschrittdetails",
    workflowitem_details_documents: "Dokumente",
    workflowitem_details_history: "Historie",
    workflowitem_details_overview: "Übersicht",
    workflowitem_type: "Workflowitem Typ",
    workflowitem_type_general: "Legen Sie ein Workflow-Item vom Typ 'general' an.",
    workflowitem_type_restricted:
      "Bei Zuweisung eines eingeschränkten Workflow-Items an einen anderen User werden Berechtigungen automatisch erteilt und entzogen. Der Zuweisende behält nur die Anzeigerechte.",
    workflow_reject_reason: "Ablehnungsgrund"
  },

  snackbar: {
    update_succeed_message: "{0} erfolgreich geändert",
    creation_succeed_message: "{0} erfolgreich erstellt",
    permissions_warning: "Noch keine Berechtigungen für {0} gesetzt"
  },

  searchBar: {
    quick_search: "Schnellsuche"
  },

  users: {
    account_name: "Accountname",
    new_user: "German: New User",
    user_created: "German: User successfully created",
    users: "German: Users",
    new_group: "German: New user group",
    groups: "German: Groups",
    add_user: "German: Add Users",
    group_created: "German: Group successfully created",
    add_group: "German: Add Group",
    edit_group: "German: Edit Group",
    edit_permissions_for: "German: Edit permissions for",
    current_user_password: "Ihr Passwort",
    new_user_password: "Neues Passwort",
    new_user_password_confirmation: "Bestätigen Sie das neue Password",
    no_password_match: "Passwörter stimmen nicht überein",
    invalid_password: "Passwort ungültig",
    change_password_for: "Passwortänderung für {0}",
    password_change_success: "Passwort wurde erfolgreich geändert",
    type_current_password: "Geben Sie das Passwort für {0} ein",
    type_new_password: "Geben Sie das neue Passwort für {0} ein",
    username_invalid: "Login-ID ungültig",
    password_conditions_preface: "Das Passwort muss:",
    password_conditions_length: "Mindestens 8 Zeichen lang sein",
    password_conditions_letter: "Mindestens einen Buchstaben enthalten",
    password_conditions_number: "Mindestens eine Zahl enthalten",
    privacy_notice:
      "Bitte stellen Sie sicher, dass Sie keine persönlichen Informationen angeben. Durch Klicken auf SUBMIT werden Ihre Daten dauerhaft gespeichert und hiermit der Erhalt des Datenschutzhinweises bestätigt.",
    selected_users: "ausgewählte Benutzer",
    disabled_users: "Deaktivierte Benutzer",
    disable_user: "Benutzer deaktivieren",
    disable_userId: "Benutzer {0} deaktivieren",
    disable_user_successfull: "Folgender Benutzer wurde deaktiviert: ",
    enable_user: "Benutzer wiederherstellen",
    enable_userId: "Benutzer {0} aktivieren",
    enable_userId_confirm: "Möchten Sie den Benutzer {0} wirklich wiederherstellen?",
    enable_user_successfull: "Folgender Benutzer wurde wiederhergestellt: ",
    no_assignments: "Keine Zuweisungen",
    assigned_projects: "Zugewiesene Projekte",
    assigned_subprojects: "Zugewiesene Subrojekte",
    assigned_workflowitems: "Zugewiesene Workflowitems",
    assigned_message:
      "Vor dem Deaktivieren muss für diesen Benutzer die Zuordnung zu folgenden Elementen aufgehoben werden",
    not_assigned_message:
      "Dieser Benutzer ist keinem Projekt, Teilprojekt und Workflowelement zugeordnet und kann deaktiviert werden.",
    hidden_assignments: "Weitere ausgeblendete {0}"
  },
  userProfile: {
    invalid_email_address: "Ungültige Emailadresse"
  },

  nodesDashboard: {
    access: "German: Access",
    additional_organization_node: "Anfragen für zusätzliche Nodes",
    address: "German: Access",
    approve: "German: Approve",
    decline: "Ablehnen",
    network: "German: Network",
    new_organization: "Anfragen für neue Organisationen",
    nodes: "German: Nodes",
    permissions: "German: Permissions",
    declined_by: "Abgelehnt von",
    connection_status: "Verbindungsstatus",
    last_seen: "Zuletzt gesehen",
    admin_description:
      "Der Administratorknoten ist der Anfangsknoten des Netzwerks und verfügt über zusätzliche 'Mine' und 'Admin' Berechtigungen."
  },

  preview: {
    actions_done: "German: {0} from {1} actions done",
    assign_action_text: "German: assign {0}",
    grant_permission_action_text: "German: grant {0} to {1}",
    not_possible_action: "German: Not possible actions",
    possible_action: "German: Possible actions",
    preview: "German: Preview",
    revoke_permission_action_text: "German: revoke {0} to {1}"
  },

  confirmation: {
    assign_permissions: "Berechtigungen zuweisen",
    additional_permissions_dialog_text:
      "Zusätzliche Aktionen müssen ausgeführt werden, um sicherzustellen, dass Benutzer auch alle erforderlichen Ressourcen anzeigen können.",
    confirmation_required: "Bestätigung notwendig",
    execute_actions: "Aktionen ausführen",
    failed_action_error:
      "Fehler: Das Gewähren von {0} an {1} ist fehlgeschlagen. Alle Aktionen, die nach dem Auftreten des Fehlers ausgeführt worden wären, einschließlich der ursprünglichen Aktionen, werden abgebrochen.",
    grant_and_assign: "Gewähren & Zuweisen",
    list_permissions_required_text:
      "Stellen Sie sicher, dass Sie Leseberechtigungen für Berechtigungen der beteiligten Ressourcen besitzen",
    no_permission_warning: "Sie benötigen folgende Berechtigungen, um alle angeforderten Aktionen ausführen zu können:",
    no_permission_help:
      "Folgende Benutzer sind berechtigt, Ihnen Berechtigungen für die benötigten Ressourcen zu geben:",
    original_actions: "Sie haben folgende Aktionen angefordert:",
    permissions_required: "Berechtigungen erforderlich",
    permissions_text: `{0} benötigt zusätzliche Berechtigungen um {1} "{2}" sehen zu können.`,
    post_actions_dialog_text: "Nach Erstellung des Workflowitems werden folgende Aktionen ausgeführt",
    project_close: "Projekt schließen",
    project_close_text: "Sind Sie sicher, dass Sie dieses Projekt schließen wollen?",
    subproject_close: "Teilprojekt schliessen",
    subproject_close_text: "Sind Sie sicher, dass Sie dieses Teilprojekt schließen wollen?",
    user_group: "Benutzer/Gruppe",
    workflowitem_close: "Workflowitem schliessen",
    workflowitem_close_text: "Sind Sie sicher, dass Sie dieses Workflow-Item schließen wollen?",
    workflowitem_create: "Erstelle Workflowitem",
    workflowitem_close_reject: "Mit Bemerkung ablehnen",
    workflowitem_close_accept: "Ablehnen"
  },

  intents: {
    assign: "zuweisen",
    close: "schließen",
    createSubproject: "Subprojekte anzeigen",
    createWorkflowitem: "Workflowitems erstellen",
    grantPermission: "Berechtigungen vergeben",
    listPermissions: "Berechtigungen anzeigen",
    reorderWorkflowitems: "Workflowitem neu anordnen",
    revokePermission: "Berechtigungen entziehen",
    update: "aktualisieren",
    viewDetails: "Details anzeigen",
    viewHistory: "History anzeigen",
    viewSummary: "Zusammenfassung anzeigen"
  },

  analytics: {
    assigned_budget_ratio: "Zugewiesene Budgetquote",
    available_unspent_budget: "Verfügbares Budget",
    converted_amount: "Umgerechneter Betrag",
    disbursed_budget_ratio: "Ausgezahlte Budgetquote",
    insufficient_permissions_text:
      "Ein oder mehrere Workflowitems sind zensiert. Die Analysen werden ausgeblendet, weil sie verfälscht würden.",
    project_analytics: "Projekt Analyse",
    projected_budget_ratio: "Projezierte Budgetquote",
    projected_budgets_distribution: "Verteilung des geplanten Budgets",
    subproject_analytics: "Subprojekt Analyse",
    total_budget_distribution: "Gesamte Budget Verteilung",
    total: "Gesamt:"
  },

  navigation: {
    admin_permission: "Admin",
    backup: "German: Backup",
    connected_peers: "Peers Verbunden",
    disconnected_peers: "Keine Peers verbunden",
    logout: "Logout",
    main_site: "Main",
    menu_item_export: "Exportieren",
    menu_item_network: "Network",
    menu_item_notifications: "Notifications",
    menu_item_projects: "Projects",
    menu_item_users: "German: Users",
    no_peers: "No peers",
    options: "Options",
    other_trustees: "Other Trustees",
    peers: "Peers",
    projects_site: "Projects",
    read_permission: "Read",
    restore: "German: Restore",
    rtUpdates: "Real-Time Updates",
    selections: "Selections",
    service_status: "Service Status",
    unread_notifications: "Unread Notifications",
    write_permission: "Write"
  },

  dashboard: {
    dashboard_card_text:
      " The connected blockchain nodes are shown in the map below_ You can click on the respective markers to obtain the exact location_",
    dashboard_subtitle: "Connected peers in the blockchain network",
    dashboard_title: "The Blockchain network dashboard"
  },

  notification: {
    next_page: "Nächste Seite",
    previous_page: "Vorherige Seite",
    rows_per_page: "Einträge pro Seite",
    create_transaction: "German: Transaction {0} created ",
    create_workflow: "German: Workflow {0} created ",
    done_transaction: "German: Status of transaction {0} set to Done",
    done_workflow: "German: Status of workflow {0} set to Done",
    edit_transaction: "German: Transaction {0} got adapted",
    edit_workflow: "German: Workflowitem {0} got adapted",
    email_saved: "Email {0} gespeichert",
    no_permissions: "German: (No permissions to see further details)",
    notification_card_text:
      "German: Please find your current notifications below_ These display action items or information items to be dealt with_",
    notification_subtitle: "German: Unread",
    notification_table_all_read: "German: all read",
    notification_table_by: "German: By",
    notification_table_description: "German: Description",
    notification_table_project: "German: Project",
    notification_table_role: "German: Role",
    notification_table_subproject: "German: Subproject",
    notification_table_view: "German: View",
    notification_title: "German: Notifications",
    project_assign: "German: Project {0} was assigned to you",
    project_assigned: "German: Project {0} was assigned to you",
    project_close: "German: Project {0} was closed",
    project_closed: "German: Project {0} was closed",
    project_createSubproject: "German: A new subproject was created for project {0}",
    project_intent_grantPermission: "German: The permissions for project {0} changed",
    project_intent_revokePermission: "German: The permissions for project {0} changed",
    project_projected_budget_deleted: "Geplantes Budget von Projekt {0} wurde entfernt",
    project_projected_budget_updated: "Geplantes Budget von Projekt {0} wurde aktualisiert",
    project_update: "German: Project {0} was updated",
    project_updated: "German: Project {0} was updated",
    read_all: "German: Read All",
    review_transaction: "German: You are assigned to review the transaction {0}",
    review_workflow: "German: You are assigned to review the workflowitem {0}",
    save_email_error: "Email konnte nicht gespeichert werden",
    subproject_assign: "German: Subproject {0} was assigned to you",
    subproject_assigned: "German: Subproject {0} was assigned to you",
    subproject_close: "German: Subproject {0} was closed",
    subproject_closed: "German: Subproject {0} was closed",
    subproject_createWorkflowitem: "German: A new workflowitem was created for subproject {0}",
    subproject_intent_grantPermission: "German: The permissions for subproject {0} changed",
    subproject_intent_revokePermission: "German: The permissions for subproject {0} changed",
    subproject_projected_budget_deleted: "Geplantes Budget von Subprojekt {0} wurde entfernt",
    subproject_projected_budget_updated: "Geplantes Budget von Subprojekt {0} wurde aktualisiert",
    subproject_reorderWorkflowitems: "German: The workflowitems of subproject {0} were reordered",
    subproject_update: "German: Subproject {0} was updated",
    subproject_updated: "German: Subproject {0} was updated",
    workflowitem_assign: "German: Workflowitem {0} was assigned to you",
    workflowitem_assigned: "German: Workflowitem {0} was assigned to you",
    workflowitem_close: "German: Workflowitem {0} was closed",
    workflowitem_closed: "German: Workflowitem {0} was closed",
    workflowitem_intent_grantPermission: "German: The permissions for workflowitem {0} changed",
    workflowitem_intent_revokePermission: "German: The permissions for workflowitem {0} changed",
    workflowitem_update: "German: Workflowitem {0} was updated",
    workflowitem_updated: "German: Workflowitem {0} was updated",
    payload_error_message:
      "Ups! ... Es ist nicht deine Schuld - Ein clientseitiger Validierungsfehler ist aufgetreten. Bitte informieren Sie den Administrator."
  },

  history: {
    created_project: "Project created ",
    created_subproject: "Subproject {0} created",
    created_workflow: "Workflow {0} created ",
    edit_addData: "Additional data of workflowitem {0} changed to {1} ",
    edit_amount: "Amount of workflowitem {0} changed from {1} to {2} ",
    edit_amountType: "Budget status of workflowitem {0} changed from {1} to {2}",
    edit_comment: "Comment of workflowitem {0} changed to {1} ",
    edit_currency: "Currency of workflowitem {0} changed to {1} ",
    edit_documents: "Documents changed for workflowitem {0}",
    edit_status: "Status of workflowitem {0} changed to {1}",
    edit_subproject: "Amount of {0} increased to {1}",
    edit_workflowName: "Name of workflowitem {0} changed to {1} ",
    end_date: "End-Datum",
    event_type: "Event Typ",
    first_sort: "Moved {0} to first position",
    project_assign: "German: {0} assigned project {1} to {2}",
    project_close: "Schließe Project",
    project_create: "German: {0} created project {1}",
    project_createSubproject: "German: {0} created subproject {1}",
    project_grantPermission_details: "{0} gab Rechte {1} an {2} für {3}",
    project_grantPermission: "German: {0} granted permission {1} to {2}",
    project_projected_budget_deleted: "{0} löschte das geplante Budget von {1}",
    project_projected_budget_updated: "{0} veränderte das geplante Budget von {1}",
    project_revokePermission_details: "{0} entzog Rechte {1} von {2} für {3}",
    project_revokePermission: "German: {0} revoked permission {1} from {2}",
    project_update: "{0} veränderte Projekt {1} ",
    publisher: "Herausgeber",
    sort: "Moved {0} after {1}",
    start_date: "Start-Datum",
    subproject_assign: "German: {0} assigned project {1} to {2}",
    subproject_close: "German: {0} closed subproject {1}",
    subproject_create: "{0} erstellte Subprojekt {1}",
    subproject_createWorkflowitem: "German: {0} created workflowitem {1}",
    subproject_grantPermission_details: "German: {0} granted permission {1} to {2} on {3}",
    subproject_grantPermission: "German: {0} granted permission {1} to {2}",
    subproject_reorderWorkflowitems: "German: {0} changed the workflowitem ordering",
    subproject_revokePermission_details: "German: {0} revoked permission {1} of {3} from {2}",
    subproject_revokePermission: "German: {0} revoked permission {1} from {2}",
    subproject_update: "{0} veränderte Subprojekt {1} ",
    to: "German: {0} to {1}",
    workflowitem_assign: "German: {0} assigned workflowitem {1} to {2}",
    workflowitem_close: "German: {0} closed workflowitem {1}",
    workflowitem_grantPermission_details: "German: {0} granted permission {1} to {2} on {3}",
    workflowitem_grantPermission: "German: {0} granted permission {1} to {2} on {3}",
    workflowitem_revokePermission_details: "German: {0} revoked permission {1} to {2} on {3}",
    workflowitem_revokePermission: "German: {0} revoked permission {1} of {3} from {2}",
    workflowitem_update_docs: "{0} fügte Dokumente zu Workflowitem {1} hinzu ",
    workflowitem_update: "{0} veränderte Workflowitem {1} ",
    workflowitem_update_amount: "{0} veränderte workflowitem {1} budget in {2} ",
    workflowitem_document_validated: "{0} validiertes Workflowitem-Dokument mit dem Namen {1} in {2} ",
    workflowitem_document_invalidated:
      "{0} hat ein anderes Dokument in Workflowitem verwendet, um das mit benannte Dokument zu validieren {1} in {2} "
  },

  permissions: {
    admin: "German: Admin permissions",
    dialog_title: "Setze Berechtigungen für {0}",
    global_createGroup: "German: Create groups",
    global_createProject: "German: Create projects",
    global_createUser: "German: Create users",
    global_disableUser: "Benutzer deaktivieren",
    global_enableUser: "Benutzer aktivieren",
    global_grantPermission: "German: Grant global permissions for others",
    global_listPermissions: "German: List all global permissions",
    global_revokePermission: "German: Revoke global permissions for others",
    network_list: "German: List all connected nodes",
    network_voteForPermission: "German: Vote if a node should join the network",
    project_assign: "German: Assign project to others",
    project_close: "German: Close project",
    project_createSubproject: "German: Create subprojects",
    project_intent_grantPermission: "German: Grant permissions",
    project_intent_listPermissions: "German: View permissions",
    project_intent_revokePermission: "German: Revoke permissions",
    project_update: "German: Update project",
    project_viewDetails: "German: View project details",
    project_viewSummary: "German: View project in overview",
    read_only: "German: Read-only permissions",
    subproject_assign: "German: Assign subproject",
    subproject_close: "German: Close subproject",
    subproject_createWorkflowitem: "German: Create workflowitems",
    subproject_intent_grantPermission: "German: Grant subproject permissions",
    subproject_intent_listPermissions: "German: View subproject permissions",
    subproject_intent_revokePermission: "German: Revoke subproject permissions",
    subproject_reorderWorkflowitems: "German: Reorder workflowitems",
    subproject_update: "German: Update subproject",
    subproject_viewDetails: "German: View subproject details",
    subproject_viewSummary: "German: View subproject overview",
    view: "German: View permissions",
    workflowitem_assign: "German: Assign workflowitem",
    workflowitem_close: "German: Close workflowitem",
    workflowitem_intent_grantPermission: "German: Grant workflowitem permission",
    workflowitem_intent_listPermissions: "German: Show workflowitem permissions",
    workflowitem_intent_revokePermission: "German: Revoke workflowitem permission",
    workflowitem_update: "German: Update workflowitem",
    workflowitem_view: "German: View workflowitem",
    write: "German: Write permissions"
  },

  eventTypes: {
    project_created: "Projekt erstellt",
    project_updated: "Projekt aktualisiert",
    project_assigned: "Projekt zugewiesen",
    project_closed: "Projekt abgeschlossen",
    project_permission_granted: "Projektgenehmigung erteilt",
    project_permission_revoked: "Projekterlaubnis widerrufen",
    project_projected_budget_updated: "Projektbudget aktualisiert",
    project_projected_budget_deleted: "Projekt-Budget abgeschlossen",

    subproject_created: "Teilprojekt angelegt",
    subproject_updated: "Teilprojekt aktualisiert",
    subproject_assigned: "Teilprojekt zugeordnet",
    subproject_closed: "Teilprojekt abgeschlossen",
    subproject_permission_granted: "Teilprojektgenehmigung erteilt",
    subproject_permission_revoked: "Subprojekt-Erlaubnis widerrufen",
    subproject_projected_budget_updated: "Teilprojekt-Budget aktualisiert",
    subproject_projected_budget_deleted: "Teilprojekt-Budget geschlossen",

    workflowitem_created: "Workflowitem erzeugt",
    workflowitem_document_validated: "Workflowitem dokument validiert",
    workflowitem_updated: "Workflowitem aktualisiert",
    workflowitem_assigned: "Workflowitem zugeordnet",
    workflowitem_closed: "Workflowitem geschlossen",
    workflowitem_permission_granted: "Workflowitem-Erlaubnis erteilt",
    workflowitem_permission_revoked: "Workflowitem-Erlaubnis widerrufen",
    workflowitems_reordered: "Workflow-Einträge neu angeordnet"
  },

  status: {
    average: "normal",
    connection: "Verbindung",
    fast: "schnell",
    no_ping_available: "kein ping möglich",
    not_connected: "nicht verbunden",
    ping: "Ping",
    service: "Service",
    slow: "langsam",
    version: "Version",
    very_slow: "sehr langsam",
    error: "Fehler",
    warning: "Warnung",
    done: "Fertig",
    toBeDone: "Ist noch offen"
  },

  language: {
    english: "Englisch",
    french: "Französisch",
    german: "Deutsch",
    portuguese: "Portugiesisch",
    georgian: "Georgisch"
  }
};

export default de;
