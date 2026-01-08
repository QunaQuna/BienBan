<!DOCTYPE html>
<!-- saved from url=(0075)https://github.com/evidenceprime/html-docx-js/blob/master/dist/html-docx.js -->
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark" data-a11y-animated-images="system" data-a11y-link-underlines="true" data-js-focus-visible="" data-turbo-loaded=""><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">.turbo-progress-bar {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  height: 3px;
  background: #0076ff;
  z-index: 2147483647;
  transition:
    width 300ms ease-out,
    opacity 150ms 150ms ease-in;
  transform: translate3d(0, 0, 0);
}
</style><style>
:root {
  --fontStack-monospace: "Monaspace Neon", ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
}
</style>




  
    
  
  
  
  
  
  

  

  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/light-dac525bbd821.css"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/dark-784387e86ac0.css"><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-56ccf4057897.css"><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-0e24752a7d2b.css"><link data-color-theme="light_colorblind_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind_high_contrast-412af2517363.css"><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-6186e83663dc.css"><link data-color-theme="light_tritanopia_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia_high_contrast-9d33c7aea2e7.css"><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-79bd5fd84a86.css"><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-75db11311555.css"><link data-color-theme="dark_colorblind_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind_high_contrast-f2c1045899a2.css"><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-f46d293c6ff3.css"><link data-color-theme="dark_tritanopia_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia_high_contrast-e4b5684db29d.css"><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-72c58078e707.css"><link data-color-theme="dark_dimmed_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed_high_contrast-956cb5dfcb85.css">

  <style type="text/css">
    :root {
      --tab-size-preference: 4;
    }

    pre, code {
      tab-size: var(--tab-size-preference);
    }
  </style>

    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/primer-primitives-c37d781e2da5.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/primer-dc3bfaf4b78e.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/global-b22d9c324b1b.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/github-7b2c79a47cf5.css">
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/repository-5d735668c600.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/code-9c9b8dc61e74.css">

  

  <script type="application/json" id="client-env">{"locale":"en","featureFlags":["a11y_status_checks_ruleset","actions_custom_images_public_preview_visibility","actions_custom_images_storage_billing_ui_visibility","actions_enable_snapshot_keyword","actions_image_version_event","agent_session_retry_fetch_capi_on_401","allow_react_navs_in_turbo","alternate_user_config_repo","api_insights_show_missing_data_banner","arianotify_comprehensive_migration","arianotify_partial_migration","billing_hard_budget_limits_for_licenses","billing_ui_budget_pagination_enabled","codespaces_prebuild_region_target_update","coding_agent_model_selection","contentful_lp_footnotes","copilot_3p_agent_hovercards","copilot_agent_cli_public_preview","copilot_agent_sessions_alive_updates","copilot_agent_task_list_v2","copilot_agent_tasks_btn_code_nav","copilot_agent_tasks_btn_code_view","copilot_agent_tasks_btn_code_view_lines","copilot_agent_tasks_btn_repo","copilot_agents_blankslate_mem_requests","copilot_api_agentic_issue_marshal_yaml","copilot_api_draft_issue_reference_with_project_id","copilot_api_github_draft_update_issue_skill","copilot_chat_agents_empty_state","copilot_chat_attach_multiple_images","copilot_chat_clear_model_selection_for_default_change","copilot_chat_disable_model_picker_while_streaming","copilot_chat_file_redirect","copilot_chat_input_commands","copilot_chat_opening_thread_switch","copilot_chat_reduce_quota_checks","copilot_chat_search_bar_redirect","copilot_chat_selection_attachments","copilot_chat_vision_in_claude","copilot_chat_vision_preview_gate","copilot_coding_agent_task_response","copilot_custom_copilots","copilot_custom_copilots_feature_preview","copilot_duplicate_thread","copilot_extensions_hide_in_dotcom_chat","copilot_extensions_removal_on_marketplace","copilot_features_raycast_logo","copilot_file_block_ref_matching","copilot_ftp_hyperspace_upgrade_prompt","copilot_icebreakers_experiment_dashboard","copilot_icebreakers_experiment_hyperspace","copilot_immersive_generate_thread_name_async","copilot_immersive_job_result_preview","copilot_immersive_structured_model_picker","copilot_immersive_task_hyperlinking","copilot_immersive_task_within_chat_thread","copilot_issue_list_show_more","copilot_org_policy_page_focus_mode","copilot_pipes_code_nodes","copilot_pipes_github_graphql_nodes","copilot_premium_request_quotas","copilot_redirect_header_button_to_agents","copilot_security_alert_assignee_options","copilot_share_active_subthread","copilot_spaces_ga","copilot_spaces_individual_policies_ga","copilot_spaces_public_access_to_user_owned_spaces","copilot_spaces_read_access_to_user_owned_spaces","copilot_spaces_report_abuse","copilot_spark_empty_state","copilot_spark_handle_nil_friendly_name","copilot_spark_loading_webgl","copilot_stable_conversation_view","copilot_swe_agent_progress_commands","copilot_swe_agent_use_subagents","copilot_unconfigured_is_inherited","dashboard_lists_max_age_filter","dashboard_universe_2025","dashboard_universe_2025_feedback_dialog","dom_node_counts","dotcom_chat_client_side_skills","enterprise_ai_controls","failbot_report_error_react_apps_on_page","fetch_graphql_ignore_fetch_network_errors","fetch_graphql_improved_error_serialization","fgpat_permissions_selector_redesign","flex_cta_groups_mvp","github_models_scheduled_hydro_events","global_nav_react_edit_status_dialog","global_nav_react_feature_preview","global_nav_react_teams_settings_page","global_nav_react_top_repos_api_caching","hide_groups_list_for_few_groups","hyperspace_2025_logged_out_batch_1","indexdb-offline-cache-periodic-cleanup","initial_per_page_pagination_updates","issue_fields_global_search","issue_fields_report_usage","issue_fields_timeline_events","issues_cca_assign_actor_with_agent","issues_expanded_file_types","issues_lazy_load_comment_box_suggestions","issues_react_bots_timeline_pagination","issues_react_chrome_container_query_fix","issues_react_client_side_caching","issues_react_client_side_caching_analytics","issues_react_include_bots_in_pickers","issues_react_prohibit_title_fallback","issues_react_ui_feedback","issues_react_use_turbo_for_cross_repo_navigation","issues_report_sidebar_interactions","lifecycle_label_name_updates","link_contact_sales_swp_marketo","loops_service_graphql_execution","marketing_pages_search_explore_provider","memex_default_issue_create_repository","memex_grouped_by_edit_route","memex_mwl_filter_field_delimiter","memex_roadmap_drag_style","mission_control_use_body_html","new_traffic_page_banner","open_agent_session_in_vscode_insiders","open_agent_session_in_vscode_stable","pr_sfv_new_diff_fetch","projects_assignee_max_limit","react_compiler_commits","react_compiler_diff_lines","react_compiler_prs_hooks","react_compiler_prs_ui","react_compiler_pull_requests","react_fetch_graphql_ignore_expected_errors","render_user_display_name","repo_traffic_job","report_hydro_web_vitals","repos_insights_remove_new_url","repository_suggester_elastic_search","ruleset_deletion_confirmation","sample_network_conn_type","scheduled_reminders_updated_limits","site_calculator_actions_2025","site_features_copilot_universe","site_homepage_collaborate_video","site_homepage_contentful","site_homepage_eyebrow_banner","site_homepage_universe_animations","site_msbuild_webgl_hero","spark_prompt_secret_scanning","swe_agent_member_requests","swe_agent_member_requests_agent_panel","viewscreen_sandbox","webp_support","workbench_store_readonly"],"login":"QunaQuna","copilotApiOverrideUrl":"https://api.individual.githubcopilot.com"}</script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/wp-runtime-6c8360e0a866.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/913-ca2305638c53.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/6488-de87864e6818.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/environment-fb75ae3199db.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/97068-2c8e697c6e8c.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/43784-4652ae97a661.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/4712-6fc930a63a4b.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/81028-5b8c5e07a4fa.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/74911-6a311b93ee8e.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/91853-448038d8f9ef.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/78143-31968346cf4c.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/87434-48bfcf328cc4.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/github-elements-526e07998dd3.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/element-registry-4ca6ce9af029.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/react-lib-b492ee0e2c35.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/react-core-8586c8dbbead.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/28546-ee41c9313871.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/17688-a9e16fb5ed13.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/2869-a4ba8f17edb3.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/70191-36bdeb9f5eb6.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/7332-5ea4ccf72018.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/3561-5983d983527e.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/24077-adc459723b71.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/51519-0c79d9af86e7.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/27376-4ba8ab45cab5.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/96384-750ef5263abe.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/19718-302da6273821.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/behaviors-bd33b4bccad6.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/37911-4e7b34638358.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/notifications-global-d4747c5b0c07.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/39713-8508e9483898.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/45688-618ec7b27252.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/90787-3d665c8ee86e.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/codespaces-3faabe482710.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/23387-1b12da426b92.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/72568-b0582cf2bbee.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/13974-18aebd0d0d21.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/71180-af432bc0079f.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/repositories-3aeb1adc647d.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/31615-236504c8966f.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/code-menu-c1690aa332c4.js.tải xuống" defer="defer"></script>
  
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/primer-react.708873d0ee1f75685f85.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/notifications-subscriptions-menu.933100a30c03fd4e8ae4.module.css">


  



  
  
  
  

    
  


  


    


  
  

  
  

    



  

  




    

  

    

    

      

      

    
    
    

      
  
  


      
      


      


      
      
      

        


  <meta http-equiv="x-pjax-version" content="23e389b096ac6f2ccd24504d33ec0cff721276bb497cb819f695efede96e00ca" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="21a43568025709b66240454fc92d4f09335a96863f8ab1c46b4a07f6a5b67102" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="1629ebc0fb2e8697986ed25f7b1629323621a13719b92f13f56e1ac4fffad60c" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="608693ced5d1a370a730c4a10441c46a65441dbeee3c7713d27bbd266ca26fa7" data-turbo-track="reload">

  

      
  

  



      


    
  


  

  

  
  

  
  
  





  

  <link rel="stylesheet" type="text/css" href="./html-docx_files/14814.29aaeaafa90f007c6f61.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./html-docx_files/24291.933100a30c03fd4e8ae4.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./html-docx_files/47657.b14b6fddffe5b4a1fb97.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./html-docx_files/86427.e073f1462f845f41ad0d.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./html-docx_files/1650.9d926f69ee309a45d0df.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./html-docx_files/16702.30736d4aa7b2b246dd6f.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./html-docx_files/71699.f4d276768bcd7cf634b3.module.css" crossorigin="anonymous"><style data-styled="active" data-styled-version="5.3.11"></style><link rel="stylesheet" type="text/css" href="./html-docx_files/6873.44b521786393825e5c12.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./html-docx_files/74667.d90bd46369532ee1911f.module.css" crossorigin="anonymous"><style id="ms-consent-banner-main-styles">.w8hcgFksdo30C8w-bygqu{color:#000}.ydkKdaztSS0AeHWIeIHsQ a{color:#0067B8}.erL690_8JwUW-R4bJRcfl{background-color:#EBEBEB;border:none;color:#000}.erL690_8JwUW-R4bJRcfl:enabled:hover{color:#000;background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}.erL690_8JwUW-R4bJRcfl:enabled:focus{background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}.erL690_8JwUW-R4bJRcfl:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2);border:none}._1zNQOqxpBFSokeCLGi_hGr{border:none;background-color:#0067B8;color:#fff}._1zNQOqxpBFSokeCLGi_hGr:enabled:hover{color:#fff;background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}._1zNQOqxpBFSokeCLGi_hGr:enabled:focus{background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}._1zNQOqxpBFSokeCLGi_hGr:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,120,215,0.2);border:none}._23tra1HsiiP6cT-Cka-ycB{position:relative;display:flex;z-index:9999;width:100%;background-color:#F2F2F2;justify-content:space-between;text-align:left}div[dir="rtl"]._23tra1HsiiP6cT-Cka-ycB{text-align:right}._1Upc2NjY8AlDn177YoVj0y{margin:0;padding-left:5%;padding-top:8px;padding-bottom:8px}div[dir="rtl"] ._1Upc2NjY8AlDn177YoVj0y{margin:0;padding:8px 5% 8px 0;float:none}._23tra1HsiiP6cT-Cka-ycB svg{fill:none;max-width:none;max-height:none}._1V_hlU-7jdtPiooHMu89BB{display:table-cell;padding:12px;width:24px;height:24px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:24px;line-height:0}.f6QKJD7fhSbnJLarTL-W-{display:table-cell;vertical-align:middle;padding:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:16px}.f6QKJD7fhSbnJLarTL-W- a{text-decoration:underline}._2j0fmugLb1FgYz6KPuB91w{display:inline-block;margin-left:5%;margin-right:5%;min-width:40%;min-width:calc((150px + 3 * 4px) * 2 + 150px);min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;align-self:center;position:relative}._1XuCi2WhiqeWRUVp3pnFG3{margin:4px;padding:5px;min-width:150px;min-height:36px;vertical-align:top;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._1XuCi2WhiqeWRUVp3pnFG3:focus{box-sizing:border-box}._1XuCi2WhiqeWRUVp3pnFG3:disabled{cursor:not-allowed}._2bvsb3ubApyZ0UGoQA9O9T{display:block;position:fixed;z-index:10000;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.6);overflow:auto;text-align:left}div[dir="rtl"]._2bvsb3ubApyZ0UGoQA9O9T{text-align:right}div[dir="rtl"] ._2bvsb3ubApyZ0UGoQA9O9T{left:auto;right:0}.AFsJE948muYyzCMktdzuk{position:relative;top:8%;margin-bottom:40px;margin-left:auto;margin-right:auto;box-sizing:border-box;width:640px;background-color:#fff;border:1px solid #0067B8}._3kWyBRbW_dgnMiEyx06Fu4{float:right;z-index:1;margin:2px;padding:12px;border:none;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:13px;display:flex;align-items:center;text-align:center;color:#666;background-color:#fff}div[dir="rtl"] ._3kWyBRbW_dgnMiEyx06Fu4{margin:2px;padding:12px;float:left}.uCYvKvHXrhjNgflv1VqdD{position:static;margin-top:36px;margin-left:36px;margin-right:36px}._17pX1m9O_W--iZbDt3Ta5r{margin-top:0;margin-bottom:12px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:20px;line-height:24px;text-transform:none}._1kBkHQ1V1wu3kl-YcLgUr6{height:446px;overflow:auto}._20_nXDf6uFs9Q6wxRXG-I-{margin-top:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._20_nXDf6uFs9Q6wxRXG-I- a{text-decoration:underline}dl._2a0NH_GDQEQe5Ynfo7suVH{margin-top:36px;margin-bottom:0;padding:0;list-style:none;text-transform:none}dt._3j_LCPv7fyXv3A8FIXVwZ4{margin-top:20px;float:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;list-style:none}.k-vxTGFbdq1aOZB2HHpjh{margin:0;padding:0;border:none}._2Bucyy75c_ogoU1g-liB5R{margin:0;padding:0;border-bottom:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;text-transform:none}._63gwfzV8dclrsl2cfd90r{display:inline-block;margin-top:0;margin-bottom:13px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._1l8wM_4mRYGz3Iu7l3BZR7{display:block}._2UE03QS02aZGkslegN_F-i{display:inline-block;position:relative;left:5px;margin-bottom:13px;margin-right:34px;padding:3px}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{margin:0 0 13px 34px;padding:3px;float:none}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{left:auto;right:5px}._23tra1HsiiP6cT-Cka-ycB *::before,._2bvsb3ubApyZ0UGoQA9O9T *::before,._23tra1HsiiP6cT-Cka-ycB *::after,._2bvsb3ubApyZ0UGoQA9O9T *::after{box-sizing:inherit}._1HSFn0HzGo6w4ADApV8-c4{outline:2px solid rgba(0,0,0,0.8)}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2{display:inline-block;position:relative;margin-top:0;margin-left:0;margin-right:0;height:0;width:0;border-radius:0;cursor:pointer;outline:none;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{display:block;position:absolute;top:5px;left:3px;height:19px;width:19px;content:"";border-radius:50%;border:1px solid #000;background-color:#fff}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{left:auto;right:3px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:rgba(0,0,0,0.8)}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label{cursor:not-allowed}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label::before{border:1px solid rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2)}._3RJzeL3l9Rl_lAQEm6VwdX{display:block;position:static;float:right;margin-top:0;margin-bottom:0;margin-left:19px;margin-right:0;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:0;width:80%;width:calc(100% - 19px);font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-transform:none;cursor:pointer;box-sizing:border-box}div[dir="rtl"] ._3RJzeL3l9Rl_lAQEm6VwdX{margin:0 19px 0 0;padding:0 8px 0 0;float:left}.nohp3sIG12ZBhzcMnPala{margin-top:20px;margin-bottom:48px}._2uhaEsmeotZ3P-M0AXo2kF{padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._2uhaEsmeotZ3P-M0AXo2kF:focus{box-sizing:border-box}._2uhaEsmeotZ3P-M0AXo2kF:disabled{cursor:not-allowed}._3tOu1FJ59c_xz_PmI1lKV5{float:right;padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._3tOu1FJ59c_xz_PmI1lKV5:focus{box-sizing:border-box}._3tOu1FJ59c_xz_PmI1lKV5:disabled{cursor:not-allowed}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0;padding:0;float:left}@media only screen and (max-width: 768px){._2j0fmugLb1FgYz6KPuB91w,._1Upc2NjY8AlDn177YoVj0y{padding-top:8px;padding-bottom:12px;padding-left:3.75%;padding-right:3.75%;margin:0;width:92.5%}._23tra1HsiiP6cT-Cka-ycB{display:block}._1XuCi2WhiqeWRUVp3pnFG3{margin-bottom:8px;margin-left:0;margin-right:0;width:100%}._2bvsb3ubApyZ0UGoQA9O9T{overflow:hidden}.AFsJE948muYyzCMktdzuk{top:1.8%;width:93.33%;height:96.4%;overflow:hidden}.uCYvKvHXrhjNgflv1VqdD{margin-top:24px;margin-left:24px;margin-right:24px;height:100%}._1kBkHQ1V1wu3kl-YcLgUr6{height:62%;height:calc(100% - 188px);min-height:50%}._2uhaEsmeotZ3P-M0AXo2kF{width:100%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:12px;margin-left:0;width:100%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 12px 0;padding:0;float:none}}@media only screen and (max-width: 768px) and (orientation: landscape), only screen and (max-height: 260px), only screen and (max-width: 340px){.AFsJE948muYyzCMktdzuk{overflow:auto}}@media only screen and (max-height: 260px), only screen and (max-width: 340px){._1XuCi2WhiqeWRUVp3pnFG3{min-width:0}._3kWyBRbW_dgnMiEyx06Fu4{padding:3%}.uCYvKvHXrhjNgflv1VqdD{margin-top:3%;margin-left:3%;margin-right:3%}._17pX1m9O_W--iZbDt3Ta5r{margin-bottom:3%}._1kBkHQ1V1wu3kl-YcLgUr6{height:calc(79% - 64px)}.nohp3sIG12ZBhzcMnPala{margin-top:5%;margin-bottom:10%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:3%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 3% 0;padding:0;float:none}}
</style><style type="text/css" id="ms-consent-banner-theme-styles">._23tra1HsiiP6cT-Cka-ycB {
            background-color: #24292f !important;
        }.w8hcgFksdo30C8w-bygqu {
            color: #ffffff !important;
        }.ydkKdaztSS0AeHWIeIHsQ a {
            color: #d8b9ff !important;
        }._2bvsb3ubApyZ0UGoQA9O9T {
            background-color: rgba(23, 23, 23, 0.8) !important;
        }.AFsJE948muYyzCMktdzuk {
            background-color: #24292f !important;
            border: 1px solid #d8b9ff !important;
        }._3kWyBRbW_dgnMiEyx06Fu4 {
            color: #d8b9ff !important;
            background-color: #24292f !important;
        }._1zNQOqxpBFSokeCLGi_hGr {
            border: 1px solid #ffffff !important;
            background-color: #ffffff !important;
            color: #1f2328 !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:hover {
            color: #1f2328 !important;
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 1px solid transparent !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:focus {
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 2px solid #ffffff !important;
        }._1zNQOqxpBFSokeCLGi_hGr:disabled {
            opacity: 0.5 !important;
            color: #1f2328 !important;
            background-color: #ffffff !important;
            border: 1px solid transparent !important;
        }.erL690_8JwUW-R4bJRcfl {
            border: 1px solid #eaeef2 !important;
            background-color: #32383f !important;
            color: #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:hover {
            color: #ffffff !important;
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 1px solid #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:focus {
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 2px solid #6e7781 !important;
        }.erL690_8JwUW-R4bJRcfl:disabled {
            opacity: 0.5 !important;
            color: #ffffff !important;
            background-color: #424a53 !important;
            border: 1px solid #6e7781 !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label::before {
            border: 1px solid #d8b9ff !important;
            background-color: #24292f !important;
        }._1HSFn0HzGo6w4ADApV8-c4 {
            outline: 2px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked + label::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::after {
            background-color: #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled + label::before {
            border: 1px solid rgba(227, 227, 227, 0.2) !important;
            background-color: rgba(227, 227, 227, 0.2) !important;
        }</style><link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/react-code-view.a3c8b35c12a7c333d171.module.css"><script type="application/json" id="client-env">{"locale":"en","featureFlags":["a11y_status_checks_ruleset","actions_custom_images_public_preview_visibility","actions_custom_images_storage_billing_ui_visibility","actions_enable_snapshot_keyword","actions_image_version_event","agent_session_retry_fetch_capi_on_401","allow_react_navs_in_turbo","alternate_user_config_repo","api_insights_show_missing_data_banner","arianotify_comprehensive_migration","arianotify_partial_migration","billing_hard_budget_limits_for_licenses","billing_ui_budget_pagination_enabled","codespaces_prebuild_region_target_update","coding_agent_model_selection","contentful_lp_footnotes","copilot_3p_agent_hovercards","copilot_agent_cli_public_preview","copilot_agent_sessions_alive_updates","copilot_agent_task_list_v2","copilot_agent_tasks_btn_code_nav","copilot_agent_tasks_btn_code_view","copilot_agent_tasks_btn_code_view_lines","copilot_agent_tasks_btn_repo","copilot_agents_blankslate_mem_requests","copilot_api_agentic_issue_marshal_yaml","copilot_api_draft_issue_reference_with_project_id","copilot_api_github_draft_update_issue_skill","copilot_chat_agents_empty_state","copilot_chat_attach_multiple_images","copilot_chat_clear_model_selection_for_default_change","copilot_chat_disable_model_picker_while_streaming","copilot_chat_file_redirect","copilot_chat_input_commands","copilot_chat_opening_thread_switch","copilot_chat_reduce_quota_checks","copilot_chat_search_bar_redirect","copilot_chat_selection_attachments","copilot_chat_vision_in_claude","copilot_chat_vision_preview_gate","copilot_coding_agent_task_response","copilot_custom_copilots","copilot_custom_copilots_feature_preview","copilot_duplicate_thread","copilot_extensions_hide_in_dotcom_chat","copilot_extensions_removal_on_marketplace","copilot_features_raycast_logo","copilot_file_block_ref_matching","copilot_ftp_hyperspace_upgrade_prompt","copilot_icebreakers_experiment_dashboard","copilot_icebreakers_experiment_hyperspace","copilot_immersive_generate_thread_name_async","copilot_immersive_job_result_preview","copilot_immersive_structured_model_picker","copilot_immersive_task_hyperlinking","copilot_immersive_task_within_chat_thread","copilot_issue_list_show_more","copilot_org_policy_page_focus_mode","copilot_pipes_code_nodes","copilot_pipes_github_graphql_nodes","copilot_premium_request_quotas","copilot_redirect_header_button_to_agents","copilot_security_alert_assignee_options","copilot_share_active_subthread","copilot_spaces_ga","copilot_spaces_individual_policies_ga","copilot_spaces_public_access_to_user_owned_spaces","copilot_spaces_read_access_to_user_owned_spaces","copilot_spaces_report_abuse","copilot_spark_empty_state","copilot_spark_handle_nil_friendly_name","copilot_spark_loading_webgl","copilot_stable_conversation_view","copilot_swe_agent_progress_commands","copilot_swe_agent_use_subagents","copilot_unconfigured_is_inherited","dashboard_lists_max_age_filter","dashboard_universe_2025","dashboard_universe_2025_feedback_dialog","dom_node_counts","dotcom_chat_client_side_skills","enterprise_ai_controls","failbot_report_error_react_apps_on_page","fetch_graphql_ignore_fetch_network_errors","fetch_graphql_improved_error_serialization","fgpat_permissions_selector_redesign","flex_cta_groups_mvp","github_models_scheduled_hydro_events","global_nav_react_edit_status_dialog","global_nav_react_feature_preview","global_nav_react_teams_settings_page","global_nav_react_top_repos_api_caching","hide_groups_list_for_few_groups","hyperspace_2025_logged_out_batch_1","indexdb-offline-cache-periodic-cleanup","initial_per_page_pagination_updates","issue_fields_global_search","issue_fields_report_usage","issue_fields_timeline_events","issues_cca_assign_actor_with_agent","issues_expanded_file_types","issues_lazy_load_comment_box_suggestions","issues_react_bots_timeline_pagination","issues_react_chrome_container_query_fix","issues_react_client_side_caching","issues_react_client_side_caching_analytics","issues_react_include_bots_in_pickers","issues_react_prohibit_title_fallback","issues_react_ui_feedback","issues_react_use_turbo_for_cross_repo_navigation","issues_report_sidebar_interactions","lifecycle_label_name_updates","link_contact_sales_swp_marketo","loops_service_graphql_execution","marketing_pages_search_explore_provider","memex_default_issue_create_repository","memex_grouped_by_edit_route","memex_mwl_filter_field_delimiter","memex_roadmap_drag_style","mission_control_use_body_html","new_traffic_page_banner","open_agent_session_in_vscode_insiders","open_agent_session_in_vscode_stable","pr_sfv_new_diff_fetch","projects_assignee_max_limit","react_compiler_commits","react_compiler_diff_lines","react_compiler_prs_hooks","react_compiler_prs_ui","react_compiler_pull_requests","react_fetch_graphql_ignore_expected_errors","render_user_display_name","repo_traffic_job","repos_insights_remove_new_url","repository_suggester_elastic_search","ruleset_deletion_confirmation","sample_network_conn_type","scheduled_reminders_updated_limits","site_calculator_actions_2025","site_features_copilot_universe","site_homepage_collaborate_video","site_homepage_contentful","site_homepage_eyebrow_banner","site_homepage_universe_animations","site_msbuild_webgl_hero","spark_prompt_secret_scanning","swe_agent_member_requests","swe_agent_member_requests_agent_panel","viewscreen_sandbox","webp_support","workbench_store_readonly"],"login":"QunaQuna","copilotApiOverrideUrl":"https://api.individual.githubcopilot.com"}</script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/primer-react-ff63f97c9f33.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/octicons-react-a215e6ee021a.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/31475-21bf49566399.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/48775-3cc79d2cd30e.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/42892-86c578f4fa0a.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/23832-0adeac37fa63.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/99418-9d4961969e0d.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/33915-05ba9b3edc31.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/96537-8e29101f7d81.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/51220-ec5733320b36.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/4731-1aa6cdb763e1.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/2541-74703d9d8eed.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/36978-92a5f8644411.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/25407-e046bb5275d4.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/40771-684069148e74.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/66990-d97459ce2022.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/29665-96a2ad6dd82d.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/91232-8996ff59af70.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/4202-64c94b9487f9.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/30240-b6b63548e7e3.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/6623-055e1e1eaf53.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/10288-aff2875a35c8.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/36584-b18455fa0176.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/3966-9dfc51a0dfe8.js.tải xuống" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/react-code-view-4166c4e958cd.js.tải xuống" defer="defer"></script><link rel="dns-prefetch" href="https://github.githubassets.com/"><link rel="dns-prefetch" href="https://avatars.githubusercontent.com/"><link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/"><link rel="dns-prefetch" href="https://user-images.githubusercontent.com/"><link rel="preconnect" href="https://github.githubassets.com/" crossorigin=""><link rel="preconnect" href="https://avatars.githubusercontent.com/"><title>html-docx-js/dist/html-docx.js at master · evidenceprime/html-docx-js</title><meta name="route-pattern" content="/:user_id/:repository/tree/*name(/*path)" data-turbo-transient=""><meta name="route-controller" content="files" data-turbo-transient=""><meta name="route-action" content="disambiguate" data-turbo-transient=""><meta name="fetch-nonce" content="v2:b4021658-3144-3211-d4d1-7c7011492bb4"><meta name="current-catalog-service-hash" content="f3abb0cc802f3d7b95fc8762b94bdcb13bf39634c40c357301c4aa1d67a256fb"><meta name="request-id" content="F4BD:3B3B76:3D66BE:43CB00:695F4474" data-turbo-transient="true"><meta name="html-safe-nonce" content="ba5963685abc16a341e2dc5f352deffa72bc7cebc8f6d8e7c5871611253c6658" data-turbo-transient="true"><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9ldmlkZW5jZXByaW1lL2h0bWwtZG9jeC1qcy9ibG9iL21hc3Rlci9kaXN0L2h0bWwtZG9jeC5qcyIsInJlcXVlc3RfaWQiOiJGNEJEOjNCM0I3NjozRDY2QkU6NDNDQjAwOjY5NUY0NDc0IiwidmlzaXRvcl9pZCI6IjcyMjc3MjQzOTIyNzYwNTMyNzciLCJyZWdpb25fZWRnZSI6InNvdXRoZWFzdGFzaWEiLCJyZWdpb25fcmVuZGVyIjoiaWFkIn0=" data-turbo-transient="true"><meta name="visitor-hmac" content="46972a2cb34f061bf8dee53afe7199cca6a80bd53fb0a4cd3df9dd64fa41d267" data-turbo-transient="true"><meta name="hovercard-subject-tag" content="repository:22472379" data-turbo-transient=""><meta name="github-keyboard-shortcuts" content="repository,source-code,file-tree,copilot" data-turbo-transient="true"><meta name="selected-link" value="repo_source" data-turbo-transient=""><link rel="assets" href="https://github.githubassets.com/"><meta name="google-site-verification" content="Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I"><meta name="octolytics-url" content="https://collector.github.com/github/collect"><meta name="octolytics-actor-id" content="185408874"><meta name="octolytics-actor-login" content="QunaQuna"><meta name="octolytics-actor-hash" content="161ee797baf45731230aaefb906eceb1cec9a853a171564d847201fbb132a4a5"><meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/files/disambiguate" data-turbo-transient="true"><meta name="user-login" content="QunaQuna"><link rel="sudo-modal" href="https://github.com/sessions/sudo_modal"><meta name="turbo-cache-control" content="no-preview" data-turbo-transient=""><meta name="turbo-cache-control" content="no-cache" data-turbo-transient=""><meta data-hydrostats="publish"><meta name="go-import" content="github.com/evidenceprime/html-docx-js git https://github.com/evidenceprime/html-docx-js.git"><meta name="octolytics-dimension-user_id" content="6417949"><meta name="octolytics-dimension-user_login" content="evidenceprime"><meta name="octolytics-dimension-repository_id" content="22472379"><meta name="octolytics-dimension-repository_nwo" content="evidenceprime/html-docx-js"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="false"><meta name="octolytics-dimension-repository_network_root_id" content="22472379"><meta name="octolytics-dimension-repository_network_root_nwo" content="evidenceprime/html-docx-js"><meta name="turbo-body-classes" content="logged-in env-production page-responsive"><meta name="disable-turbo" content="false"><meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats"><meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors"><meta name="release" content="ffc17a5ed02c059a306d7676e52c8078b5f2978f"><meta name="ui-target" content="full"><link rel="mask-icon" href="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg" color="#000000"><link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png"><link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg" data-base-href="https://github.githubassets.com/favicons/favicon"><meta name="theme-color" content="#1e2327"><meta name="color-scheme" content="light dark"><link rel="manifest" href="https://github.com/manifest.json" crossorigin="use-credentials"><style type="text/css" id="ms-consent-banner-theme-styles"></style><style data-styled="true" data-styled-version="5.3.11" data-react-root-id="892e15bd-7f68-4a52-918c-477348db7f18">.jmjlbk{width:100%;}/*!sc*/
@media screen and (min-width:544px){.jmjlbk{width:100%;}}/*!sc*/
@media screen and (min-width:768px){.jmjlbk{width:auto;}}/*!sc*/
.cybVuK{margin-left:auto;margin-right:auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:40px;max-width:100%;margin-top:0;}/*!sc*/
.gSjuRy{display:inherit;}/*!sc*/
.jqtuOB{display:block;margin-right:8px;}/*!sc*/
@media screen and (min-width:1360px){.jqtuOB{display:block;}}/*!sc*/
.jyTWxL{margin-left:16px;margin-right:16px;}/*!sc*/
.kntYzq{top:0px;z-index:0;background:var(--bgColor-default,var(--color-canvas-default));position:-webkit-sticky;position:sticky;}/*!sc*/
.gcRdxb{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:var(--bgColor-muted,var(--color-canvas-subtle,#f6f8fa));border-bottom:none;overflow:hidden;}/*!sc*/
.iNRqcN{display:none;min-width:0;padding-top:8px;padding-bottom:8px;}/*!sc*/
.jAIDYE{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:16px;}/*!sc*/
.vdPNv{position:fixed;top:0;right:0;height:100%;width:15px;-webkit-transition:-webkit-transform 0.3s;-webkit-transition:transform 0.3s;transition:transform 0.3s;z-index:1;}/*!sc*/
.vdPNv:hover{-webkit-transform:scaleX(1.5);-ms-transform:scaleX(1.5);transform:scaleX(1.5);}/*!sc*/
data-styled.g1[id="Box-sc-62in7e-0"]{content:"jmjlbk,cybVuK,gSjuRy,jqtuOB,jyTWxL,kntYzq,gcRdxb,iNRqcN,jAIDYE,vdPNv,"}/*!sc*/
</style></head>

  <body class="logged-in env-production page-responsive" style="overflow-wrap: break-word; --dialog-scrollgutter: 19px;">
    <div data-turbo-body="" class="logged-in env-production page-responsive" style="word-wrap: break-word;">
      <div id="__primerPortalRoot__" role="region" style="z-index: 1000; position: absolute; width: 100%;" data-turbo-permanent=""></div>
      



    <div class="position-relative header-wrapper js-header-wrapper ">
      <a href="https://github.com/evidenceprime/html-docx-js/blob/master/dist/html-docx.js#start-of-content" data-skip-target-assigned="false" class="p-3 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>

      <span data-view-component="true" class="progress-pjax-loader Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      
      <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/primer-react.708873d0ee1f75685f85.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/keyboard-shortcuts-dialog.29aaeaafa90f007c6f61.module.css">

<react-partial partial-name="keyboard-shortcuts-dialog" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"docsUrl":"https://docs.github.com/get-started/accessibility/keyboard-shortcuts"}}</script>
  <div data-target="react-partial.reactRoot"><div class="d-none"></div><script type="application/json" id="__PRIMER_DATA__r_15___">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>





      

          

                  <header class="AppHeader" role="banner">
      <h2 class="sr-only">Navigation Menu</h2>


        

        <div class="AppHeader-globalBar pb-2 js-global-bar">
          <div class="AppHeader-globalBar-start responsive-context-region">
            <div class="">
                      <react-partial-anchor data-catalyst="">
        <button data-target="react-partial-anchor.anchor" aria-label="Open global navigation menu" show_tooltip="false" type="button" data-view-component="true" class="AppHeader-button Button--secondary Button--medium Button p-0 color-fg-muted" aria-expanded="false" aria-haspopup="true">  <span class="Button-content">
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-three-bars">
    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
</svg></span>
  </span>
</button>
        
      
          <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/primer-react.708873d0ee1f75685f85.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/45961.330bb3cbfabc52ef2584.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/global-nav-menu.e073f1462f845f41ad0d.module.css">

<react-partial partial-name="global-nav-menu" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"home":{"href":"/dashboard","hotkey":"g d"},"feed":{"show":false,"href":"/feed"},"issues":{"href":"/issues","hotkey":"g i"},"pulls":{"href":"/pulls","hotkey":"g p"},"contributedRepos":{"show":true,"href":"https://github.com/repos","hotkey":null},"projects":{"href":"/projects"},"discussions":{"show":true,"href":"/discussions"},"codespaces":{"show":true,"href":"https://github.com/codespaces"},"copilot":{"show":true,"href":"/copilot"},"spark":{"show":false,"href":null},"marketplace":{"show":true,"href":"/marketplace"},"mcp":{"show":true,"href":"https://github.com/mcp"},"explore":{"show":true,"href":"/explore"},"richContent":{"show":true,"contentUrl":"/_side-panels/global.json","repositoriesSearchUrl":"/_side-panel-items/global/repositories.json","teamsSearchUrl":"/_side-panel-items/global/teams.json"}}}</script>
  <div data-target="react-partial.reactRoot"><div class="d-none"><li data-has-description="false" class="prc-ActionList-ActionListItem-So4vC"><a class="prc-ActionList-ActionListContent-KBb8- prc-Link-Link-9ZwDx" tabindex="0" aria-labelledby="_r_30_--label  " id="_r_30_" data-size="medium" href="https://github.com/dashboard" data-testid="side-nav-menu-item-HOME" style="--subitem-depth: 0;"><span class="prc-ActionList-Spacer-4tR2m"></span><span class="prc-ActionList-LeadingVisual-NBr28 prc-ActionList-VisualWrap-bdCsS"><svg aria-hidden="true" focusable="false" class="octicon octicon-home" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"></path></svg></span><span class="prc-ActionList-ActionListSubContent-gKsFp" data-component="ActionList.Item--DividerContainer"><span id="_r_30_--label" class="prc-ActionList-ItemLabel-81ohH">Home</span></span></a></li><li data-has-description="false" class="prc-ActionList-ActionListItem-So4vC"><a class="prc-ActionList-ActionListContent-KBb8- prc-Link-Link-9ZwDx" tabindex="0" aria-labelledby="_r_31_--label  " id="_r_31_" data-size="medium" href="https://github.com/issues" data-testid="side-nav-menu-item-ISSUES" style="--subitem-depth: 0;"><span class="prc-ActionList-Spacer-4tR2m"></span><span class="prc-ActionList-LeadingVisual-NBr28 prc-ActionList-VisualWrap-bdCsS"><svg aria-hidden="true" focusable="false" class="octicon octicon-issue-opened" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg></span><span class="prc-ActionList-ActionListSubContent-gKsFp" data-component="ActionList.Item--DividerContainer"><span id="_r_31_--label" class="prc-ActionList-ItemLabel-81ohH">Issues</span></span></a></li><li data-has-description="false" class="prc-ActionList-ActionListItem-So4vC"><a class="prc-ActionList-ActionListContent-KBb8- prc-Link-Link-9ZwDx" tabindex="0" aria-labelledby="_r_32_--label  " id="_r_32_" data-size="medium" href="https://github.com/pulls" data-testid="side-nav-menu-item-PULL_REQUESTS" style="--subitem-depth: 0;"><span class="prc-ActionList-Spacer-4tR2m"></span><span class="prc-ActionList-LeadingVisual-NBr28 prc-ActionList-VisualWrap-bdCsS"><svg aria-hidden="true" focusable="false" class="octicon octicon-git-pull-request" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg></span><span class="prc-ActionList-ActionListSubContent-gKsFp" data-component="ActionList.Item--DividerContainer"><span id="_r_32_--label" class="prc-ActionList-ItemLabel-81ohH">Pull requests</span></span></a></li></div><script type="application/json" id="__PRIMER_DATA__r_2v___">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>


        </react-partial-anchor>

            </div>

            <a class="AppHeader-logo ml-1 " href="https://github.com/" data-hotkey="g d" aria-label="Homepage " data-turbo="false" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;}">
              <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
</svg>
            </a>

              <context-region-controller class="AppHeader-context responsive-context-region" data-max-items="5" data-catalyst="">
  <div class="AppHeader-context-full">
    <nav role="navigation" aria-label="GitHub Breadcrumb">
      
<context-region data-target="context-region-controller.contextRegion" role="list" data-action="context-region-changed:context-region-controller#crumbsChanged" data-catalyst="">
    <context-region-crumb data-crumb-id="contextregion-usercrumb-evidenceprime" data-targets="context-region.crumbs" data-label="evidenceprime" data-href="/evidenceprime" data-pre-rendered="" role="listitem" data-catalyst="">
      <a data-target="context-region-crumb.linkElement" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;evidenceprime&quot;,&quot;screen_size&quot;:&quot;full&quot;}" data-hovercard-type="organization" data-hovercard-url="/orgs/evidenceprime/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/evidenceprime" id="contextregion-usercrumb-evidenceprime-link" data-view-component="true" class="AppHeader-context-item" aria-keyshortcuts="Alt+ArrowUp">
        <span data-target="context-region-crumb.labelElement" class="AppHeader-context-item-label ">evidenceprime</span>

</a><tool-tip data-target="context-region-crumb.tooltip" for="contextregion-usercrumb-evidenceprime-link" popover="manual" class="sr-only" position="absolute" data-type="label" data-direction="s" hidden="" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>
          evidenceprime
        </tool-tip>
      <context-region-divider data-target="context-region-crumb.dividerElement" data-pre-rendered="" data-catalyst="">
  <span class="AppHeader-context-item-separator">
    <span class="sr-only">/</span>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.956 1.27994L6.06418 14.7201L5 14.7201L9.89181 1.27994L10.956 1.27994Z" fill="currentcolor"></path>
    </svg>
  </span>
</context-region-divider>

    
        
      </context-region-crumb>

      <li data-target="context-region-controller.overflowMenuContainer context-region.overflowMenuContainer" role="listitem" hidden="">
        <action-menu data-target="context-region-controller.overflowActionMenu" data-select-variant="none" data-view-component="true" data-catalyst="" data-ready="true">
  <focus-group direction="vertical" mnemonics="" retain="">
    <button id="action-menu-4abe55f7-41cb-41e1-883d-5007e4e04ada-button" popovertarget="action-menu-4abe55f7-41cb-41e1-883d-5007e4e04ada-overlay" aria-controls="action-menu-4abe55f7-41cb-41e1-883d-5007e4e04ada-list" aria-haspopup="true" aria-labelledby="tooltip-3e0cad9c-1344-47ce-8e26-61e438a68aa5" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal Button-visual">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
</button><tool-tip id="tooltip-3e0cad9c-1344-47ce-8e26-61e438a68aa5" for="action-menu-4abe55f7-41cb-41e1-883d-5007e4e04ada-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Show more breadcrumb items</tool-tip>


<anchored-position data-target="action-menu.overlay" id="action-menu-4abe55f7-41cb-41e1-883d-5007e4e04ada-overlay" anchor="action-menu-4abe55f7-41cb-41e1-883d-5007e4e04ada-button" align="start" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" style="inset: 4px auto auto 0px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone">          <action-list data-catalyst="">
  <div data-view-component="true">
    <ul aria-labelledby="action-menu-4abe55f7-41cb-41e1-883d-5007e4e04ada-button" id="action-menu-4abe55f7-41cb-41e1-883d-5007e4e04ada-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
        <li hidden="true" data-crumb-id="contextregion-usercrumb-evidenceprime" data-targets="context-region.overflowCrumbs action-list.items" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_overflow_menu_crumb&quot;,&quot;label&quot;:&quot;global-navigation&quot;}" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-74b1b8f3-8271-453b-a11e-576142260dbc" href="https://github.com/evidenceprime" role="menuitem" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          evidenceprime
</span>      
</a>
  
</li>
        <li hidden="true" data-crumb-id="contextregion-repositorycrumb-html-docx-js" data-targets="context-region.overflowCrumbs action-list.items" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_overflow_menu_crumb&quot;,&quot;label&quot;:&quot;global-navigation&quot;}" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-1877ea39-abc2-429d-81fd-f90b4e6ef228" href="https://github.com/evidenceprime/html-docx-js" role="menuitem" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          html-docx-js
</span>      
</a>
  
</li>
</ul>    
</div></action-list>


</div>
      
</div></anchored-position>  </focus-group>
</action-menu>
  <context-region-divider data-target="context-region-crumb.dividerElement" data-pre-rendered="" data-catalyst="">
  <span class="AppHeader-context-item-separator">
    <span class="sr-only">/</span>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.956 1.27994L6.06418 14.7201L5 14.7201L9.89181 1.27994L10.956 1.27994Z" fill="currentcolor"></path>
    </svg>
  </span>
</context-region-divider>


      </li>
    <context-region-crumb data-crumb-id="contextregion-repositorycrumb-html-docx-js" data-targets="context-region.crumbs" data-label="html-docx-js" data-href="/evidenceprime/html-docx-js" data-pre-rendered="" role="listitem" data-catalyst="">
      <a data-target="context-region-crumb.linkElement" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;html-docx-js&quot;,&quot;screen_size&quot;:&quot;full&quot;}" href="https://github.com/evidenceprime/html-docx-js" id="contextregion-repositorycrumb-html-docx-js-link" data-view-component="true" class="AppHeader-context-item">
        <span data-target="context-region-crumb.labelElement" class="AppHeader-context-item-label ">html-docx-js</span>

</a><tool-tip data-target="context-region-crumb.tooltip" for="contextregion-repositorycrumb-html-docx-js-link" popover="manual" class="sr-only" position="absolute" data-type="label" data-direction="s" hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>
          html-docx-js
        </tool-tip>
      <context-region-divider data-target="context-region-crumb.dividerElement" data-pre-rendered="" data-catalyst="">
  <span class="AppHeader-context-item-separator">
    <span class="sr-only">/</span>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.956 1.27994L6.06418 14.7201L5 14.7201L9.89181 1.27994L10.956 1.27994Z" fill="currentcolor"></path>
    </svg>
  </span>
</context-region-divider>

    
        
      </context-region-crumb>

</context-region>

    </nav>
  </div>
</context-region-controller>

          </div>
          <div class="AppHeader-globalBar-end">
              <div class="AppHeader-search">
                  


<qbsearch-input class="search-input" data-scope="repo:evidenceprime/html-docx-js" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="Gy9DT56d75gdb0GD-YxuzV2i4xraT4qPkjOsZWeaS-YM3nfJj0P0jblbHPfHHRog5ItCGF8NkqJwYfS0wd2JLA" data-max-custom-scopes="10" data-header-redesign-enabled="true" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="evidenceprime/html-docx-js" data-current-org="evidenceprime" data-current-owner="" data-logged-in="true" data-copilot-chat-enabled="true" data-nl-search-enabled="false" data-catalyst="">
  <div class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center height-auto color-bg-transparent border-0 color-fg-subtle mx-0" data-action="click:qbsearch-input#searchInputContainerClicked">
        
              <button type="button" data-action="click:qbsearch-input#handleExpand" class="AppHeader-button AppHeader-search-whenNarrow" aria-label="Search or jump to…" aria-expanded="false" aria-haspopup="dialog">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
            </button>


<div class="AppHeader-search-whenRegular">
  <div class="AppHeader-search-wrap AppHeader-search-wrap--hasTrailing">
    <div class="AppHeader-search-control AppHeader-search-control-overflow">
      <label for="AppHeader-searchInput" aria-label="Search or jump to…" class="AppHeader-search-visual--leading">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
      </label>

                  <button type="button" data-target="qbsearch-input.inputButton" data-action="click:qbsearch-input#handleExpand" class="AppHeader-searchButton form-control text-left color-fg-subtle no-wrap placeholder" data-hotkey="s,/" data-analytics-event="{&quot;location&quot;:&quot;navbar&quot;,&quot;action&quot;:&quot;searchbar&quot;,&quot;context&quot;:&quot;global&quot;,&quot;tag&quot;:&quot;input&quot;,&quot;label&quot;:&quot;searchbar_input_global_navbar&quot;}" aria-describedby="search-error-message-flash">
              <div class="overflow-hidden">
                <span id="qb-input-query" data-target="qbsearch-input.inputButtonText">
                    Type <kbd class="AppHeader-search-kbd">/</kbd> to search
                </span>
              </div>
            </button>

    </div>


  </div>
</div>

    <input type="hidden" name="type" class="js-site-search-type-field">

    
<div class="Overlay--hidden " data-modal-dialog-overlay="">
  <modal-dialog data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose" data-target="qbsearch-input.searchSuggestionsDialog" role="dialog" id="search-suggestions-dialog" aria-modal="true" aria-labelledby="search-suggestions-dialog-header" data-view-component="true" class="Overlay Overlay--width-medium Overlay--height-auto">
      <h1 id="search-suggestions-dialog-header" class="sr-only">Search code, repositories, users, issues, pull requests...</h1>
    <div class="Overlay-body Overlay-body--paddingNone">
      
          <div data-view-component="true">        <div class="search-suggestions position-absolute width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container" style="border-radius: 12px;" data-target="qbsearch-input.queryBuilderContainer" hidden="">
          <!-- '"` --><!-- </textarea></xmp> --><form id="query-builder-test-form" action="https://github.com/evidenceprime/html-docx-js/blob/master/dist/html-docx.js" accept-charset="UTF-8" method="get">
  <query-builder data-target="qbsearch-input.queryBuilder" id="query-builder-query-builder-test" data-filter-key=":" data-view-component="true" class="QueryBuilder search-query-builder" data-min-width="300" data-catalyst="">
    <div class="FormControl FormControl--fullWidth">
      <label id="query-builder-test-label" for="query-builder-test" class="FormControl-label sr-only">
        Search
      </label>
      <div class="QueryBuilder-StyledInput width-fit " data-target="query-builder.styledInput">
          <span id="query-builder-test-leadingvisual-wrap" class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search FormControl-input-leadingVisual">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </span>
        <div data-target="query-builder.styledInputContainer" class="QueryBuilder-StyledInputContainer">
          <div aria-hidden="true" class="QueryBuilder-StyledInputContent" data-target="query-builder.styledInputContent"></div>
          <div class="QueryBuilder-InputWrapper">
            <div aria-hidden="true" class="QueryBuilder-Sizer" data-target="query-builder.sizer"><span></span></div>
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-875217f2-dabc-48b4-9952-a57b5b6b90ea" data-target="query-builder.input" data-action="
          input:query-builder#inputChange
          blur:query-builder#inputBlur
          keydown:query-builder#inputKeydown
          focus:query-builder#inputFocus
        " data-view-component="true" class="FormControl-input QueryBuilder-Input FormControl-medium" aria-controls="query-builder-test-results" aria-autocomplete="list" aria-haspopup="listbox" style="width: 300px;">
          </div>
        </div>
          <span class="sr-only" id="query-builder-test-clear">Clear</span>
          <button role="button" id="query-builder-test-clear-button" aria-labelledby="query-builder-test-clear query-builder-test-label" data-target="query-builder.clearButton" data-action="
                click:query-builder#clear
                focus:query-builder#clearButtonFocus
                blur:query-builder#clearButtonBlur
              " variant="small" hidden="" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill Button-visual">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>

      </div>
      <template id="search-icon"></template>

<template id="code-icon"></template>

<template id="file-code-icon"></template>

<template id="history-icon"></template>

<template id="repo-icon"></template>

<template id="bookmark-icon"></template>

<template id="plus-circle-icon"></template>

<template id="circle-icon"></template>

<template id="trash-icon"></template>

<template id="team-icon"></template>

<template id="project-icon"></template>

<template id="pencil-icon"></template>

<template id="copilot-icon"></template>

<template id="copilot-error-icon"></template>

<template id="workflow-icon"></template>

<template id="book-icon"></template>

<template id="code-review-icon"></template>

<template id="codespaces-icon"></template>

<template id="comment-icon"></template>

<template id="comment-discussion-icon"></template>

<template id="organization-icon"></template>

<template id="rocket-icon"></template>

<template id="shield-check-icon"></template>

<template id="heart-icon"></template>

<template id="server-icon"></template>

<template id="globe-icon"></template>

<template id="issue-opened-icon"></template>

<template id="device-mobile-icon"></template>

<template id="package-icon"></template>

<template id="credit-card-icon"></template>

<template id="play-icon"></template>

<template id="gift-icon"></template>

<template id="code-square-icon"></template>

<template id="device-desktop-icon"></template>

        <div class="position-relative">
                <ul role="listbox" class="ActionListWrap QueryBuilder-ListWrap" aria-label="Suggestions" data-action="
                    combobox-commit:query-builder#comboboxCommit
                    mousedown:query-builder#resultsMousedown
                  " data-target="query-builder.resultsList" data-persist-list="false" id="query-builder-test-results" tabindex="-1"></ul>
        </div>
      <div class="FormControl-inlineValidation" id="validation-875217f2-dabc-48b4-9952-a57b5b6b90ea" hidden="hidden">
        <span class="FormControl-inlineValidation--visual">
          <svg aria-hidden="true" height="12" viewBox="0 0 12 12" version="1.1" width="12" data-view-component="true" class="octicon octicon-alert-fill">
    <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
</svg>
        </span>
        <span></span>
</div>    </div>
    <div data-target="query-builder.screenReaderFeedback" aria-live="polite" aria-atomic="true" class="sr-only">0 suggestions.</div>
</query-builder></form>
          <div class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt">
            <a target="_blank" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax" data-view-component="true" class="Link color-fg-accent text-normal ml-2">Search syntax tips</a>            <div class="d-flex flex-1"></div>
              <button data-action="click:qbsearch-input#showFeedbackDialog" type="button" data-view-component="true" class="Button--link Button--medium Button color-fg-accent text-normal ml-2">  <span class="Button-content">
    <span class="Button-label">Give feedback</span>
  </span>
</button>
          </div>
        </div>
</div>

    </div>
</modal-dialog></div>
  </div>
  <div data-action="click:qbsearch-input#retract" class="dark-backdrop position-fixed" hidden="" data-target="qbsearch-input.darkBackdrop"></div>
  <div class="color-fg-default">
    
<dialog-helper>
  <dialog data-target="qbsearch-input.feedbackDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="feedback-dialog" aria-modal="true" aria-labelledby="feedback-dialog-title" aria-describedby="feedback-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade Overlay--disableScroll">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="feedback-dialog-title">
        Provide feedback
      </h1>
        
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="feedback-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="feedback-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --><form id="code-search-feedback-form" data-turbo="false" action="https://github.com/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="wHcThJNj4nYRGn23iqPxHy7ZkcSHU-v6wpGONMjZtm7OoZSVN8UGqQS_h5G9yZIMc5FT1PP8061SXeo6MI9_Uw">
          <p>We read every piece of feedback, and take your input very seriously.</p>
          <textarea name="feedback" class="form-control width-full mb-2" style="height: 120px" id="feedback"></textarea>
          <input name="include_email" id="include_email" aria-label="Include my email address so I can be contacted" class="form-control mr-2" type="checkbox">
          <label for="include_email" style="font-weight: normal">Include my email address so I can be contacted</label>
</form></div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">          <button data-close-dialog-id="feedback-dialog" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="code-search-feedback-form" data-action="click:qbsearch-input#submitFeedback" type="submit" data-view-component="true" class="btn-primary btn">    Submit feedback
</button>
</div>
</dialog></dialog-helper>

    <custom-scopes data-target="qbsearch-input.customScopesManager" data-catalyst="">
    
<dialog-helper>
  <dialog data-target="custom-scopes.customScopesModalDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="custom-scopes-dialog" aria-modal="true" aria-labelledby="custom-scopes-dialog-title" aria-describedby="custom-scopes-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade Overlay--disableScroll">
    <div data-view-component="true" class="Overlay-header Overlay-header--divided">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="custom-scopes-dialog-title">
        Saved searches
      </h1>
        <h2 id="custom-scopes-dialog-description" class="Overlay-description">Use saved searches to filter your results more quickly</h2>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="custom-scopes-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="custom-scopes-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

        <div hidden="" class="create-custom-scope-form" data-target="custom-scopes.createCustomScopeForm">
        <!-- '"` --><!-- </textarea></xmp> --><form id="custom-scopes-dialog-form" data-turbo="false" action="https://github.com/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="QxVRbA9jOxk3obHF1W38TJ3--7Zgd9syXRdZFIySFsYHzzyP2Q0-lJT3FXPjd83TpZl2SGxAX9DOWIwZ5qRM6Q">
          <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

          <input type="hidden" id="custom_scope_id" name="custom_scope_id" data-target="custom-scopes.customScopesIdField">

          <div class="form-group">
            <label for="custom_scope_name">Name</label>
            <auto-check src="/search/custom_scopes/check_name" required="">
              <input type="text" name="custom_scope_name" id="custom_scope_name" data-target="custom-scopes.customScopesNameField" class="form-control" autocomplete="off" placeholder="github-ruby" required="" maxlength="50" spellcheck="false">
              <input type="hidden" value="gaz7PrgyWTFX-JSlajMmWnUcd0b89FvXHhqehOreUHy3pbYEscfyFCY1xWqpDLILYKavWtooQqZNyNtIdlQl1Q" data-csrf="true">
            </auto-check>
          </div>

          <div class="form-group">
            <label for="custom_scope_query">Query</label>
            <input type="text" name="custom_scope_query" id="custom_scope_query" data-target="custom-scopes.customScopesQueryField" class="form-control" autocomplete="off" placeholder="(repo:mona/a OR repo:mona/b) AND lang:python" required="" maxlength="500">
          </div>

          <p class="text-small color-fg-muted">
            To see all available qualifiers, see our <a class="Link--inTextBlock" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax">documentation</a>.
          </p>
</form>        </div>

        <div data-target="custom-scopes.manageCustomScopesForm">
          <div data-target="custom-scopes.list"></div>
        </div>

</div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided">          <button data-action="click:custom-scopes#customScopesCancel" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="custom-scopes-dialog-form" data-action="click:custom-scopes#customScopesSubmit" data-target="custom-scopes.customScopesSubmitButton" type="submit" data-view-component="true" class="btn-primary btn">    Create saved search
</button>
</div>
</dialog></dialog-helper>
    </custom-scopes>
  </div>
</qbsearch-input>  <input type="hidden" value="n4J2Bkwi5Po9n14y7h4clI27AFGS3gGrkLILkosxJ_LWnRWmxLm-g1kA055F9NzZ697JCNbe1298BPFaCUBnoQ" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf">


              </div>

            
              <div class="AppHeader-CopilotChat hide-sm hide-md">
  <div class="d-flex">
    <react-partial-anchor data-catalyst="">
        <a href="https://github.com/copilot" data-target="react-partial-anchor.anchor" id="copilot-chat-header-button" aria-labelledby="tooltip-3ee07374-95c8-437f-bfcb-b26a6c885762" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button AppHeader-buttonLeft">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copilot Button-visual">
    <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
</svg>
</a><tool-tip id="tooltip-3ee07374-95c8-437f-bfcb-b26a6c885762" for="copilot-chat-header-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Chat with Copilot</tool-tip>

      
    
        <script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/26744-145228b165b8.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/48889-a5dfa653e692.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/18312-eae0b7b61115.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/347-d8794b0e68a7.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/89332-479350a254d3.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/15874-7b76c84c6fa8.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/45230-15943c5d83b7.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/5853-d0a8a3bf6a60.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/16007-a629e97ccd37.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/88324-d7eea3db7970.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/3146-9ca03a5c5e8d.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/4817-6e0601e376f5.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/37294-c7cb83b5a475.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/2635-22192b296685.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/30721-3f46d6ff779a.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/99808-87f773be1bcc.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/52302-9c81906c291c.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/81171-757517779b01.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/1631-1c5a60d02658.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/34522-2f907b3a3def.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/92135-09db072403c5.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/34031-78ee71894ae1.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/74258-cee9db6c4082.js.tải xuống" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./html-docx_files/copilot-chat-ac17ed23854f.js.tải xuống" defer="defer"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/primer-react.708873d0ee1f75685f85.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/74258.9808678d7b6ba11ef6e2.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/copilot-chat.d90bd46369532ee1911f.module.css">
        <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/copilot-markdown-rendering-ddd978d4a7c0.css">
        <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/primer-react.708873d0ee1f75685f85.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/74258.9808678d7b6ba11ef6e2.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/copilot-chat.d90bd46369532ee1911f.module.css">

<react-partial partial-name="copilot-chat" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"currentTopic":{"id":22472379,"name":"html-docx-js","ownerLogin":"evidenceprime","ownerType":"Organization","readmePath":"README.md","description":"Converts HTML documents to DOCX in the browser","commitOID":"d785735b5e843e234414fc0e9c4f688bd1ac0b92","ref":"refs/heads/master","refInfo":{"name":"master","type":"branch"},"visibility":"public","languages":[{"name":"JavaScript","percent":95.9},{"name":"CoffeeScript","percent":2.6},{"name":"Other","percent":1.5}],"customInstructions":[],"defaultBranch":"master","ownerAvatarUrl":"https://avatars.githubusercontent.com/u/6417949?v=4"},"findFileWorkerPath":"/assets-cdn/worker/find-file-worker-0cea8c6113ab.js","renderPopover":false,"renderBetaLabel":false,"chatIsVisible":true,"chatVisibleSettingPath":"/users/QunaQuna/copilot_chat/settings/copilot_chat_visibility","ssoOrganizations":[],"agentsPath":"/github-copilot/chat/agents","apiURL":"https://api.individual.githubcopilot.com","apiVersion":"2025-05-01","currentUserLogin":"QunaQuna","customInstructions":null,"customCopilotsEnabled":true,"optedInToPreviewFeatures":false,"optedInToUserFeedback":true,"personalInstructions":null,"graphqlApiUrl":"/copilot/loops/loops_execution","loopsClientUrl":"/copilot/loops/client","reviewLab":false,"realIp":null,"scrollToTop":false,"hasCEorCBAccess":false,"licenseType":"licensed_limited","plan":"free","quotas":{"limits":{"premiumInteractions":0},"remaining":{"chat":500,"completions":2784,"premiumInteractions":0,"chatPercentage":100.0,"premiumInteractionsPercentage":0.0},"resetDate":"2026-01-26","overagesEnabled":false},"icebreakers":[{"type":"functional","data":[{"id":"create-bug-issue","message":"Hi Copilot! Could you please start a draft issue for a bug? Once you've created the draft issue, if you need more information, ask me 1-2 key questions. If you also think I should upload any information or images that would help write the bug issue, let me know.","titleHtml":"Create an issue for a bug","icon":"issue-opened","color":"var(--display-green-fgColor)"},{"id":"summarize-pulls","message":"Hi Copilot! Could you help summarize a pull request? I'd like to know its purpose and the key changes made. Please include details about the problem it solves, new features or functionality introduced, any breaking changes, testing done, and documentation updates. Thank you!","titleHtml":"Summarize a pull request","icon":"git-pull-request","color":"var(--display-green-fgColor)"},{"id":"code-feedback","message":"Hi Copilot! Please review my code for best practices, readability, performance, and potential bugs. First, prompt me to provide the link to the relevant GitHub repository or file. Then, offer concrete suggestions for improvement, explain any issues you discover, and provide example corrections where appropriate.","titleHtml":"Get code feedback","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"next-steps-issue","message":"Hi Copilot! Could you suggest the next actionable steps for an issue, based on either the provided issue link or a copy pasted description?","titleHtml":"Suggest next steps for an issue","icon":"issue-opened","color":"var(--display-green-fgColor)"},{"id":"understand-arch-diagram","message":"Hi Copilot! Could you please help me interpret this architecture diagram?","titleHtml":"Interpret an architecture diagram","icon":"eye","color":"var(--display-purple-fgColor)"},{"id":"create-profile-readme","message":"Hi Copilot! Please create a standout profile README for $$USERNAME$$. Ask me for any key details (such as my profession, top skills, favorite projects, or social links) that would help you personalize it.","titleHtml":"Create a profile README for me","icon":"rocket","color":"var(--display-pink-fgColor)"},{"id":"my-open-pulls","message":"Hi Copilot! Can you please find my open pull requests?","titleHtml":"My open pull requests","icon":"git-pull-request","color":"var(--display-green-fgColor)"},{"id":"make-pong","message":"Hi Copilot! Could you generate a simple Pong game utilizing HTML, CSS, and JavaScript? The player should control the left paddle with their mouse, and the right paddle should be controlled automatically by a basic AI. Make sure the game includes a bouncing ball and collision detection for paddles and walls. Please provide the code for all three components: the HTML file, the CSS file, and the JavaScript file directly within the chat window. Thanks!","titleHtml":"Make a Pong game","icon":"code","color":"var(--display-gray-fgColor)"}]},{"type":"instructional","data":[]},{"type":"interactional","data":[{"id":"to-do-app-local-storage","message":"Create a to-do list application with local storage functionality.","titleHtml":"To-do list with local storage","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"digital-clock-time-zones","message":"Create a digital clock that displays the current time in different time zones.","titleHtml":"A digital time zone clock","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"weather-dashboard-app","message":"Develop a weather dashboard that fetches data from a public weather API.","titleHtml":"Develop a weather dashboard","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"create-joke-generator","message":"Create a random joke generator using an external API.","titleHtml":"Create a joke generator","icon":"code","color":"var(--display-gray-fgColor)"}]}],"canShareThread":true,"thirdPartyMcpAllowed":true}}</script>
  <div data-target="react-partial.reactRoot"><div class="CopilotChat-module__CopilotChatContainer--fWXmM"></div><div class="PortalContainerUtils-module__chatPortalContainer--Otmle"></div><div class="PortalContainerUtils-module__menuPortalContainer--D7AeL CopilotChat-module__menuPortalContainer--FUc3K"></div><script type="application/json" id="__PRIMER_DATA__r_3d___">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>



      </react-partial-anchor>
    <div class="position-relative">
      
        <react-partial-anchor data-catalyst="">
          <button id="global-copilot-menu-button" data-target="react-partial-anchor.anchor" aria-expanded="false" aria-labelledby="tooltip-1f52717d-f99a-456f-8e40-12011a3d97be" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button AppHeader-buttonRight" aria-haspopup="true">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down Button-visual">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button><tool-tip id="tooltip-1f52717d-f99a-456f-8e40-12011a3d97be" for="global-copilot-menu-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Open Copilot…</tool-tip>

          
        
            <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/primer-react.708873d0ee1f75685f85.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/global-copilot-menu.9d926f69ee309a45d0df.module.css">

<react-partial partial-name="global-copilot-menu" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"repository":{"id":22472379,"name":"html-docx-js","ownerLogin":"evidenceprime"}}}</script>
  <div data-target="react-partial.reactRoot"><div class="d-none"></div><script type="application/json" id="__PRIMER_DATA__r_33___">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>


          </react-partial-anchor>
    </div>
  </div>
</div>


            <div class="AppHeader-actions position-relative">
                 <react-partial-anchor data-catalyst="">
      <button id="global-create-menu-anchor" aria-label="Create something new" data-target="react-partial-anchor.anchor" type="button" data-view-component="true" class="AppHeader-button AppHeader-button--dropdown global-create-button Button--secondary Button--medium Button width-auto color-fg-muted" aria-describedby="tooltip-4d9001d2-788e-4de9-bbeb-80280a549574" aria-expanded="false" aria-haspopup="true">  <span class="Button-content">
      <span class="Button-visual Button-leadingVisual">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus">
    <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
</svg>
      </span>
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></span>
  </span>
</button><tool-tip id="tooltip-4d9001d2-788e-4de9-bbeb-80280a549574" for="global-create-menu-anchor" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Create new…</tool-tip>

      
    
        <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/primer-react.708873d0ee1f75685f85.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/global-create-menu.30736d4aa7b2b246dd6f.module.css">

<react-partial partial-name="global-create-menu" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"showCreateRepo":true,"showImportRepo":true,"showCodespaces":true,"showSpark":false,"showCodingAgent":false,"showGist":true,"showCreateOrg":true,"showCreateProject":false,"showCreateLegacyProject":false,"showCreateIssue":true,"createProjectUrl":"/QunaQuna?tab=projects","org":null,"owner":"evidenceprime","repo":"html-docx-js"}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA__r_37___">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>


      </react-partial-anchor>


                <a href="https://github.com/issues" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-ec642628-05d2-4f66-a79b-0d1e236c9928" aria-labelledby="tooltip-93783ce0-2b36-4087-b570-c14bb79a42c1" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</a><tool-tip id="tooltip-93783ce0-2b36-4087-b570-c14bb79a42c1" for="icon-button-ec642628-05d2-4f66-a79b-0d1e236c9928" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Your issues</tool-tip>

                <a href="https://github.com/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-4c41ddb5-b1c2-4fce-bc66-e4819175183f" aria-labelledby="tooltip-60680f57-4d62-4169-a236-f435503f9704" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
</a><tool-tip id="tooltip-60680f57-4d62-4169-a236-f435503f9704" for="icon-button-4c41ddb5-b1c2-4fce-bc66-e4819175183f" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Your pull requests</tool-tip>

                  <a href="https://github.com/repos" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;REPOS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-d50b160f-29ca-4e27-9e06-c2f415f7f236" aria-labelledby="tooltip-478348c1-f05c-4e56-a861-5859e30b56a4" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo Button-visual">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
</a><tool-tip id="tooltip-478348c1-f05c-4e56-a861-5859e30b56a4" for="icon-button-d50b160f-29ca-4e27-9e06-c2f415f7f236" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="position-absolute sr-only" aria-hidden="true" role="tooltip" style="--tool-tip-position-top: 48px; --tool-tip-position-left: 1746.6328125px;"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Repositories</tool-tip>

            </div>

              <notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTg1NDA4ODc0IiwidCI6MTc2Nzg1MTEyNH0=--5d43b7a6b2f8ba1ec5cda7ba65527fc744d9747038fbd2f17d55d752c8758401" data-indicator-mode="none" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-header-redesign-enabled="true" data-fetch-indicator-src="/notifications/indicator" data-fetch-indicator-enabled="true" data-view-component="true" class="js-socket-channel" data-fetch-retry-delay-time="500" data-catalyst="">
    <a id="AppHeader-notifications-button" href="https://github.com/notifications" aria-labelledby="notification-indicator-tooltip" data-hotkey="g n" data-target="notification-indicator.link" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;NOTIFICATIONS_HEADER&quot;,&quot;label&quot;:&quot;icon:read&quot;}" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-inbox Button-visual">
    <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
</svg>
</a>

    <tool-tip id="notification-indicator-tooltip" data-target="notification-indicator.tooltip" for="AppHeader-notifications-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>You have no unread notifications</tool-tip>
</notification-indicator>

            <div class="AppHeader-user">
              <deferred-side-panel data-url="/_side-panels/user?repository_id=22472379" data-catalyst="">
  <include-fragment data-target="deferred-side-panel.fragment" data-nonce="v2:b4021658-3144-3211-d4d1-7c7011492bb4" data-view-component="true"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template>
  
    <react-partial-anchor data-catalyst="">
  <button data-target="react-partial-anchor.anchor" data-login="QunaQuna" aria-label="Open user navigation menu" type="button" data-view-component="true" class="Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0" aria-expanded="false" aria-haspopup="true">  <span class="Button-content">
    <span class="Button-label"><img src="./html-docx_files/185408874" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle"></span>
  </span>
</button>
  

    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/primer-react.708873d0ee1f75685f85.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./html-docx_files/global-user-nav-drawer.f4d276768bcd7cf634b3.module.css">

<react-partial partial-name="global-user-nav-drawer" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"owner":{"login":"QunaQuna","name":null,"avatarUrl":"https://avatars.githubusercontent.com/u/185408874?v=4"},"drawerId":"global-user-nav-drawer","lazyLoadItemDataFetchUrl":"/_side-panels/user.json","canAddAccount":true,"addAccountPath":"/login?add_account=1\u0026return_to=https%3A%2F%2Fgithub.com%2Fevidenceprime%2Fhtml-docx-js%2Ftree%2Fmaster%2Fdist","switchAccountPath":"/switch_account","loginAccountPath":"/login?add_account=1","projectsPath":"/QunaQuna?tab=projects","gistsUrl":"https://gist.github.com/mine","docsUrl":"https://docs.github.com","yourEnterpriseUrl":null,"enterpriseSettingsUrl":null,"supportUrl":"https://support.github.com","showAccountSwitcher":true,"showCopilot":true,"showEnterprises":true,"showEnterprise":false,"showGists":true,"showOrganizations":true,"showSponsors":true,"showUpgrade":true,"showFeaturesPreviews":true,"showEnterpriseSettings":false}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA__r_3a___">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>


  </react-partial-anchor>


  <div data-show-on-forbidden-error="" hidden="">
    <div class="Box">
  <div class="blankslate-container">
    <div data-view-component="true" class="blankslate blankslate-spacious color-bg-default rounded-2">
      

      <h3 data-view-component="true" class="blankslate-heading">        Uh oh!
</h3>
      <p data-view-component="true">        </p><p class="color-fg-muted my-2 mb-2 ws-normal">There was an error while loading. <a class="Link--inTextBlock" data-turbo="false" href="https://github.com/evidenceprime/html-docx-js/blob/master/dist/html-docx.js" aria-label="Please reload this page">Please reload this page</a>.</p>
<p></p>

</div>  </div>
</div>  </div>
</include-fragment></deferred-side-panel>
            </div>

            <div class="position-absolute mt-2">
                
<site-header-logged-in-user-menu data-catalyst="">

</site-header-logged-in-user-menu>

            </div>
          </div>
        </div>


        
            <div class="AppHeader-localBar">
              <nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav">

  <ul data-view-component="true" class="UnderlineNav-body list-style-none">
      <li data-view-component="true" class="d-inline-flex">
  <a id="code-tab" href="https://github.com/evidenceprime/html-docx-js" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments repo_attestations /evidenceprime/html-docx-js" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g c" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Code&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected" aria-current="page">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        <span data-content="Code">Code</span>
          <span id="code-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="issues-tab" href="https://github.com/evidenceprime/html-docx-js/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /evidenceprime/html-docx-js/issues" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g i" data-react-nav="issues-react" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Issues&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        <span data-content="Issues">Issues</span>
          <span id="issues-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="76" data-view-component="true" class="Counter">76</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="pull-requests-tab" href="https://github.com/evidenceprime/html-docx-js/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /evidenceprime/html-docx-js/pulls" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Pull requests&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        <span data-content="Pull requests">Pull requests</span>
          <span id="pull-requests-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="7" data-view-component="true" class="Counter">7</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="actions-tab" href="https://github.com/evidenceprime/html-docx-js/actions" data-tab-item="i3actions-tab" data-selected-links="repo_actions /evidenceprime/html-docx-js/actions" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g a" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Actions&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        <span data-content="Actions">Actions</span>
          <span id="actions-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="projects-tab" href="https://github.com/evidenceprime/html-docx-js/projects" data-tab-item="i4projects-tab" data-selected-links="repo_projects new_repo_project repo_project /evidenceprime/html-docx-js/projects" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g b" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Projects&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        <span data-content="Projects">Projects</span>
          <span id="projects-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="security-tab" href="https://github.com/evidenceprime/html-docx-js/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /evidenceprime/html-docx-js/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span data-content="Security">Security</span>
          </a><div data-show-on-forbidden-error="" hidden=""><a id="security-tab" href="https://github.com/evidenceprime/html-docx-js/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /evidenceprime/html-docx-js/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    </a><div class="Box"><a id="security-tab" href="https://github.com/evidenceprime/html-docx-js/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /evidenceprime/html-docx-js/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
  </a><div class="blankslate-container"><a id="security-tab" href="https://github.com/evidenceprime/html-docx-js/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /evidenceprime/html-docx-js/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    </a><div data-view-component="true" class="blankslate blankslate-spacious color-bg-default rounded-2"><a id="security-tab" href="https://github.com/evidenceprime/html-docx-js/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /evidenceprime/html-docx-js/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
      

      <h3 data-view-component="true" class="blankslate-heading">        Uh oh!
</h3>
      <p data-view-component="true">        </p></a><p class="color-fg-muted my-2 mb-2 ws-normal"><a id="security-tab" href="https://github.com/evidenceprime/html-docx-js/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /evidenceprime/html-docx-js/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">There was an error while loading. </a><a class="Link--inTextBlock" data-turbo="false" href="https://github.com/evidenceprime/html-docx-js/blob/master/dist/html-docx.js" aria-label="Please reload this page">Please reload this page</a>.</p>
<p></p>

</div>  </div>
</div>  </div>


    
</li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="insights-tab" href="https://github.com/evidenceprime/html-docx-js/pulse" data-tab-item="i6insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /evidenceprime/html-docx-js/pulse" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Insights&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        <span data-content="Insights">Insights</span>
          <span id="insights-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
</ul>
    <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">      <action-menu data-select-variant="none" data-view-component="true" data-catalyst="" data-ready="true">
  <focus-group direction="vertical" mnemonics="" retain="">
    <button id="action-menu-3b0919bc-0dbb-45c6-b098-d7951d645914-button" popovertarget="action-menu-3b0919bc-0dbb-45c6-b098-d7951d645914-overlay" aria-controls="action-menu-3b0919bc-0dbb-45c6-b098-d7951d645914-list" aria-haspopup="true" aria-labelledby="tooltip-4cc276fb-8584-4251-a8f5-eaa178c04378" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium UnderlineNav-item">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal Button-visual">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
</button><tool-tip id="tooltip-4cc276fb-8584-4251-a8f5-eaa178c04378" for="action-menu-3b0919bc-0dbb-45c6-b098-d7951d645914-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Additional navigation options</tool-tip>


<anchored-position data-target="action-menu.overlay" id="action-menu-3b0919bc-0dbb-45c6-b098-d7951d645914-overlay" anchor="action-menu-3b0919bc-0dbb-45c6-b098-d7951d645914-button" align="start" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" style="inset: 36px auto auto 0px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone">          <action-list data-catalyst="">
  <div data-view-component="true">
    <ul aria-labelledby="action-menu-3b0919bc-0dbb-45c6-b098-d7951d645914-button" id="action-menu-3b0919bc-0dbb-45c6-b098-d7951d645914-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
        <li hidden="" data-menu-item="i0code-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-edab2c9e-ecf7-4a0f-94ea-d3c4aacb6818" href="https://github.com/evidenceprime/html-docx-js" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Code
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i1issues-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-808100aa-7732-4f66-9adc-a80e41beb2a0" href="https://github.com/evidenceprime/html-docx-js/issues" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Issues
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i2pull-requests-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-eb12fdf5-95cf-4727-bf8c-7f2e7e7e47ec" href="https://github.com/evidenceprime/html-docx-js/pulls" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Pull requests
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i3actions-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-25a7575e-7457-4e1b-bcfb-8bf95c54d3c3" href="https://github.com/evidenceprime/html-docx-js/actions" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Actions
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i4projects-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-2d6beb61-00d3-44e9-b053-13dd3dc92c28" href="https://github.com/evidenceprime/html-docx-js/projects" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Projects
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i5security-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-1fdfa9e4-6cde-476b-97c7-25bec16a301a" href="https://github.com/evidenceprime/html-docx-js/security" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Security
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i6insights-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-2ccb6302-69c2-41fe-8a1a-66076c831614" href="https://github.com/evidenceprime/html-docx-js/pulse" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Insights
</span>      
</a>
  
</li>
</ul>    
</div></action-list>


</div>
      
</div></anchored-position>  </focus-group>
</action-menu></div>
</nav>
              
            </div>
    </header>


      <div hidden="hidden" data-view-component="true" class="js-stale-session-flash stale-session-flash flash flash-warn flash-full">
  
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span class="js-stale-session-flash-signed-in" hidden="">You signed in with another tab or window. <a class="Link--inTextBlock" href="https://github.com/evidenceprime/html-docx-js/blob/master/dist/html-docx.js">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-signed-out" hidden="">You signed out in another tab or window. <a class="Link--inTextBlock" href="https://github.com/evidenceprime/html-docx-js/blob/master/dist/html-docx.js">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-switched" hidden="">You switched accounts on another tab or window. <a class="Link--inTextBlock" href="https://github.com/evidenceprime/html-docx-js/blob/master/dist/html-docx.js">Reload</a> to refresh your session.</span>

    <button id="icon-button-6ce52cdd-418a-4a0f-aed4-f154a16603d8" aria-labelledby="tooltip-22d4dbed-fd0d-41a4-904c-6e7972403433" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium flash-close js-flash-close">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button><tool-tip id="tooltip-22d4dbed-fd0d-41a4-904c-6e7972403433" for="icon-button-6ce52cdd-418a-4a0f-aed4-f154a16603d8" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Dismiss alert</tool-tip>


  
</div>
        
          
    </div>

  <div id="start-of-content" class="show-on-focus"></div>








    <div id="js-flash-container" class="flash-container" data-turbo-replace="">


      


  <template class="js-flash-template"></template>
</div>


    
  <notification-shelf-watcher data-base-url="https://github.com/notifications/beta/shelf" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTg1NDA4ODc0IiwidCI6MTc2Nzg1MTEyNH0=--5d43b7a6b2f8ba1ec5cda7ba65527fc744d9747038fbd2f17d55d752c8758401" data-view-component="true" class="js-socket-channel" data-refresh-delay="500" data-catalyst="" data-throttle-delay="5000"></notification-shelf-watcher>
  <div hidden="" data-initial="" data-target="notification-shelf-watcher.placeholder"></div>






  <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="" data-project-hovercards-enabled="">
        <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container">
      
      
    

    






    
  <div id="repository-container-header" data-turbo-replace="" hidden=""></div>



<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">
    <div id="repo-content-pjax-container" class="repository-content ">
      <a href="https://github.dev/" class="d-none js-github-dev-shortcut" data-hotkey=".,Mod+Alt+.">Open in github.dev</a>
  <a href="https://github.dev/" class="d-none js-github-dev-new-tab-shortcut" data-hotkey="Shift+.,Shift+&gt;,&gt;" target="_blank" rel="noopener noreferrer">Open in a new github.dev tab</a>
    <a class="d-none" data-hotkey=",,Mod+Alt+," target="_blank" href="https://github.com/codespaces/new/evidenceprime/html-docx-js/tree/master?resume=1">Open in codespace</a>




    
      
    








<react-app app-name="react-code-view" initial-path="/evidenceprime/html-docx-js/tree/master/dist" style="display: block; min-height: calc(100vh - 64px);" data-attempted-ssr="true" data-ssr="true" data-lazy="false" data-alternate="false" data-data-router-enabled="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"allShortcutsEnabled":true,"path":"dist","repo":{"id":22472379,"defaultBranch":"master","name":"html-docx-js","ownerLogin":"evidenceprime","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2014-07-31T21:34:41.000+07:00","ownerAvatar":"https://avatars.githubusercontent.com/u/6417949?v=4","public":true,"private":false,"isOrgOwned":true},"currentUser":{"id":185408874,"login":"QunaQuna","userEmail":"nguyenhoangquan13032004@gmail.com"},"refInfo":{"name":"master","listCacheKey":"v0:1572380003.0","canEdit":true,"refType":"branch","currentOid":"d785735b5e843e234414fc0e9c4f688bd1ac0b92"},"tree":{"items":[{"name":"html-docx.js","path":"dist/html-docx.js","contentType":"file"}],"templateDirectorySuggestionUrl":null,"readme":null,"totalCount":1,"showBranchInfobar":false},"fileTree":{"":{"items":[{"name":"dist","path":"dist","contentType":"directory"},{"name":"src","path":"src","contentType":"directory"},{"name":"test","path":"test","contentType":"directory"},{"name":".arcconfig","path":".arcconfig","contentType":"file"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":".npmignore","path":".npmignore","contentType":"file"},{"name":"CHANGELOG.md","path":"CHANGELOG.md","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"bower.json","path":"bower.json","contentType":"file"},{"name":"coffeelint.json","path":"coffeelint.json","contentType":"file"},{"name":"gulpfile.coffee","path":"gulpfile.coffee","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"}],"totalCount":13}},"fileTreeProcessingTime":6.156639,"foldersToFetch":[],"userNameDisplayConfiguration":"handle","treeExpanded":false,"symbolsExpanded":false,"copilotSWEAgentEnabled":false,"csrf_tokens":{"/evidenceprime/html-docx-js/branches":{"post":"tjo7CHBpwmjvJm7gAwgZ4w68d5XmJBdsS-OuC0cgckUzOzwm8HkFXO1xf8ScCgB3Orp3dRGBp9Ov7k8x6-C2dQ"},"/evidenceprime/html-docx-js/branches/fetch_and_merge/master":{"post":"RPjKyoVRum0Y0Vw9qZHUJfbX9B7t5QamOS-drC39KSOkDiip5kC-quzK494l-rXQKKI6FcY-FfWFyCBY4wqeGQ"},"/evidenceprime/html-docx-js/branches/fetch_and_merge/master?discard_changes=true":{"post":"DBBHnoFT93seR_YgUu9ftXuu9dbVZYXjIrSn-X_w1iXs5qX94kLzvOpcScPehD5Apds73f6-lrCeUxoNsQdhHw"}}},"title":"html-docx-js/dist at master · evidenceprime/html-docx-js","appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-0cea8c6113ab.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-edcdbd6f0915.js","githubDevUrl":"https://github.dev/","enabled_features":{"code_nav_ui_events":false,"react_blob_overlay":true,"accessible_code_button":true}}}</script>
  <div data-target="react-app.reactRoot"><meta name="github-code-view-meta-stats" id="github-code-view-meta-stats" data-hydrostats="publish"> <!-- --> <!-- --> <button hidden="" data-testid="header-permalink-button" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="y,Shift+Y"></button><button hidden="" data-hotkey="y,Shift+Y"></button><div><div style="--spacing:var(--spacing-none)" class="prc-PageLayout-PageLayoutRoot--KH-d"><div class="prc-PageLayout-PageLayoutWrapper-2BhU2" data-width="full"><div class="prc-PageLayout-PageLayoutContent-BneH9"><div tabindex="0" class="Box-sc-62in7e-0 jmjlbk"><div class="prc-PageLayout-PaneWrapper-pHPop ReposFileTreePane-module__Pane--D26Sw ReposFileTreePane-module__HideTree--IyYTf ReposFileTreePane-module__HidePane--a07q8" style="--offset-header:0px;--spacing-row:var(--spacing-none);--spacing-column:var(--spacing-none)" data-is-hidden="false" data-position="start" data-sticky="true"><div class="prc-PageLayout-HorizontalDivider-JLVqp prc-PageLayout-PaneHorizontalDivider-9tbnE" data-variant-regular="none" data-variant-narrow="none" data-position="start" style="--spacing-divider:var(--spacing-none);--spacing:var(--spacing-none)"></div><div class="prc-PageLayout-Pane-AyzHK" data-resizable="true" style="--spacing: var(--spacing-none); --pane-min-width: 256px; --pane-max-width: 961px; --pane-width-size: var(--pane-width-large); --pane-width: 320px;"></div><div class="prc-PageLayout-VerticalDivider-9QRmK prc-PageLayout-PaneVerticalDivider-le57g" data-variant-narrow="none" data-variant-regular="line" data-variant-wide="line" data-position="start" style="--spacing:var(--spacing-none)"><div class="prc-PageLayout-DraggableHandle-9s6B4" role="slider" aria-label="Draggable pane splitter" aria-valuemin="256" aria-valuemax="961" aria-valuenow="320" aria-valuetext="Pane width 320 pixels" tabindex="0"></div></div></div></div><div class="prc-PageLayout-ContentWrapper-gR9eG CodeView-module__SplitPageLayout_Content--jx2Z1" data-is-hidden-narrow="false"><div class="prc-PageLayout-Content-xWL-A" data-width="full" style="--spacing:var(--spacing-none)"><div data-selector="repos-split-pane-content" tabindex="0" class="Box-sc-62in7e-0 cybVuK"><div class="Box-sc-62in7e-0 gSjuRy"><div class="container CodeViewHeader-module__Box--iIXFW"><div class="px-3 pt-3 pb-0" id="StickyHeader"><div class="CodeViewHeader-module__Box_1--aCFlZ"><div class="CodeViewHeader-module__Box_2--Nk8st"><div class="react-code-view-header-wrap--narrow CodeViewHeader-module__Box_3--qOof0"><div class="Box-sc-62in7e-0 jqtuOB"><h2 class="use-tree-pane-module__Heading--iI_ad prc-Heading-Heading-MtWFE"><button type="button" aria-label="Expand file tree" data-testid="expand-file-tree-button-mobile" class="prc-Button-ButtonBase-9n-Xk ExpandFileTreeButton-module__Button_1--g8F6Q" data-loading="false" data-size="medium" data-variant="invisible" data-hotkey="Control+b"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-Iohp5"><span data-component="leadingVisual" class="prc-Button-Visual-YNt2F prc-Button-VisualWrap-E4cnq"><svg aria-hidden="true" focusable="false" class="octicon octicon-arrow-left" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z"></path></svg></span><span data-component="text" class="prc-Button-Label-FWkx3">Files</span></span></button><button data-component="IconButton" type="button" data-testid="expand-file-tree-button" aria-expanded="false" aria-controls="repos-file-tree" class="prc-Button-ButtonBase-9n-Xk position-relative ExpandFileTreeButton-module__expandButton--oKI1R ExpandFileTreeButton-module__filesButtonBreakpoint--03FKA fgColor-muted prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="invisible" aria-labelledby="_R_9b9lab_" data-hotkey="Control+b"><svg aria-hidden="true" focusable="false" class="octicon octicon-sidebar-collapse" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z"></path><path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25ZM11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-tLeuB" data-direction="se" aria-hidden="true" id="_R_9b9lab_" popover="auto">Expand file tree</span><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+b"></button></h2></div><div class="react-code-view-header-mb--narrow mr-2"><button type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-label="master branch" data-testid="anchor-button" class="prc-Button-ButtonBase-9n-Xk ref-selector-class RefSelectorAnchoredOverlay-module__RefSelectorOverlayBtn--D34zl" data-loading="false" data-size="medium" data-variant="default" id="ref-picker-repos-header-ref-selector-wide" data-hotkey="w"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-Iohp5"><span data-component="text" class="prc-Button-Label-FWkx3"><div class="RefSelectorAnchoredOverlay-module__RefSelectorOverlayContainer--mCbv8"><div class="RefSelectorAnchoredOverlay-module__RefSelectorOverlayHeader--D4cnZ"><svg aria-hidden="true" focusable="false" class="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg></div><div style="max-width:125px" class="ref-selector-button-text-container RefSelectorAnchoredOverlay-module__RefSelectorBtnTextContainer--yO402"><span class="RefSelectorAnchoredOverlay-module__RefSelectorText--bxVhQ">&nbsp;<!-- -->master</span></div></div></span><span data-component="trailingVisual" class="prc-Button-Visual-YNt2F prc-Button-VisualWrap-E4cnq"><svg aria-hidden="true" focusable="false" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></span></span></button><button hidden="" data-testid="ref-selector-hotkey-button" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="w"></button></div><div class="react-code-view-header-mb--narrow CodeViewHeader-module__Box_5--gX0kP"><div class="Breadcrumb-module__container--u5hNw Breadcrumb-module__lg--X8kMz"><nav data-testid="breadcrumbs" aria-labelledby="repos-header-breadcrumb-heading" id="repos-header-breadcrumb" class="Breadcrumb-module__nav--kjUkO"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vlUbc prc-Heading-Heading-MtWFE" data-testid="screen-reader-heading" id="repos-header-breadcrumb-heading">Breadcrumbs</h2><ol class="Breadcrumb-module__list--lkq0r"><li class="Breadcrumb-module__listItem--r4enD"><a class="Breadcrumb-module__repoLink--ZlDIS prc-Link-Link-9ZwDx" data-testid="breadcrumbs-repo-link" href="https://github.com/evidenceprime/html-docx-js/tree/master" data-discover="true">html-docx-js</a></li><li class="Breadcrumb-module__listItem--r4enD"><span class="Breadcrumb-module__separator--DqIXz Breadcrumb-module__lg--X8kMz" aria-hidden="true">/</span><a class="Breadcrumb-module__directoryLink--pwiL6 prc-Link-Link-9ZwDx" href="https://github.com/evidenceprime/html-docx-js/tree/master/dist" data-discover="true">dist</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Breadcrumb-module__filename--n2aVJ"><span class="Breadcrumb-module__separator--DqIXz Breadcrumb-module__lg--X8kMz" aria-hidden="true">/</span><h1 class="Breadcrumb-module__filenameHeading--Paorw Breadcrumb-module__lg--X8kMz prc-Heading-Heading-MtWFE" tabindex="-1" id="file-name-id">html-docx.js</h1></div><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-9n-Xk ml-2 prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-labelledby="_R_fb9lab_"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span class="Box-sc-62in7e-0 CopyToClipboardButton-module__tooltip--HDUYz prc-TooltipV2-Tooltip-tLeuB" data-direction="nw" aria-label="Copy path" aria-hidden="true" id="_R_fb9lab_" popover="auto">Copy path</span></div></div></div><div class="react-code-view-header-element--wide"><div class="CodeViewHeader-module__Box_7--dBydM"><div class="d-flex gap-2"> <div><div class="Box-sc-62in7e-0 CodeViewHeader-module__FileResultsList--jfr5L"><span class="TextInput__StyledTextInput-sc-ttxlvl-0 d-flex FileResultsList-module__FilesSearchBox--fSAh3 TextInput-wrapper prc-components-TextInputWrapper-Hpdqi prc-components-TextInputBaseWrapper-wY-n0" data-leading-visual="true" data-trailing-visual="true" aria-busy="false"><span class="TextInput-icon" id="_r_3e_" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></span><input aria-label="Go to file" role="combobox" aria-controls="file-results-list" aria-expanded="false" aria-haspopup="dialog" autocorrect="off" spellcheck="false" placeholder="Go to file" aria-describedby="_r_3e_ _r_3f_" data-component="input" class="prc-components-Input-IwWrt" type="text" value=""><span class="TextInput-icon" id="_r_3f_" aria-hidden="true"><kbd>t</kbd></span></span></div><button hidden="" data-testid="" data-hotkey="t,Shift+T" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="t,Shift+T"></button></div><button hidden="" data-testid="" data-hotkey="l,Shift+L" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="l,Shift+L"></button><button hidden="" data-testid="" data-hotkey="Mod+Alt+g" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Mod+Alt+g"></button><button type="button" data-hotkey="b,Shift+B,Control+/ Control+b" class="prc-Button-ButtonBase-9n-Xk Button__StyledButtonComponent-sc-vqy3e4-0 hfSsoj NavigationMenu-module__Button--SKxrr" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-Iohp5"><span data-component="text" class="prc-Button-Label-FWkx3">Blame</span></span></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><button data-component="IconButton" type="button" data-testid="more-file-actions-button-nav-menu-wide" aria-haspopup="true" aria-expanded="false" tabindex="0" class="prc-Button-ButtonBase-9n-Xk js-blob-dropdown-click NavigationMenu-module__IconButton--YP8f3 prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-labelledby="_r_3n_" id="_r_3l_"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-tLeuB" data-direction="nw" aria-hidden="true" id="_r_3n_" popover="auto">More file actions</span> </div></div></div><div class="react-code-view-header-element--narrow"><div class="CodeViewHeader-module__Box_7--dBydM"><div class="d-flex gap-2"> <button hidden="" data-testid="" data-hotkey="l,Shift+L" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="l,Shift+L"></button><button hidden="" data-testid="" data-hotkey="Mod+Alt+g" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Mod+Alt+g"></button><button type="button" data-hotkey="b,Shift+B,Control+/ Control+b" class="prc-Button-ButtonBase-9n-Xk Button__StyledButtonComponent-sc-vqy3e4-0 hfSsoj NavigationMenu-module__Button--SKxrr" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-Iohp5"><span data-component="text" class="prc-Button-Label-FWkx3">Blame</span></span></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><button data-component="IconButton" type="button" data-testid="more-file-actions-button-nav-menu-narrow" aria-haspopup="true" aria-expanded="false" tabindex="0" class="prc-Button-ButtonBase-9n-Xk js-blob-dropdown-click NavigationMenu-module__IconButton--YP8f3 prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-labelledby="_r_3s_" id="_r_3q_"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-tLeuB" data-direction="nw" aria-hidden="true" id="_r_3s_" popover="auto">More file actions</span> </div></div></div></div></div></div></div></div><div class="Box-sc-62in7e-0 jyTWxL react-code-view-bottom-padding"> <div class="BlobTopBanners-module__Box--F5OCo"></div>   </div><div class="Box-sc-62in7e-0 jyTWxL">   <button hidden="" data-testid="" data-hotkey="r,Shift+R" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="r,Shift+R"></button><div class="d-flex flex-column border rounded-2 mb-3 pl-1"><div class="LatestCommit-module__Box--Fimpo"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vlUbc prc-Heading-Heading-MtWFE" data-testid="screen-reader-heading">Latest commit</h2><div data-testid="latest-commit" class="LatestCommit-module__Box_1--aQ5OG"><div class="CommitAttribution-module__CommitAttributionContainer--Si80C"><div data-testid="author-avatar" class="Box-sc-62in7e-0 AuthorAvatar-module__AuthorAvatarContainer--Z1TF8"><a class="Link__StyledLink-sc-1syctfj-0 prc-Link-Link-9ZwDx" href="https://github.com/N1kto" data-testid="avatar-icon-link" data-hovercard-url="/users/N1kto/hovercard" aria-keyshortcuts="Alt+ArrowUp"><img data-component="Avatar" class="Box-sc-62in7e-0 kglDHV AuthorAvatar-module__authorAvatarImage--bQzij prc-Avatar-Avatar-0xaUi" alt="N1kto" width="20" height="20" data-testid="github-avatar" aria-label="N1kto" src="./html-docx_files/5045863" style="--avatarSize-regular: 20px;"></a><a class="Link__StyledLink-sc-1syctfj-0 iIGVMW AuthorAvatar-module__authorHoverableLink--vw9qe prc-Link-Link-9ZwDx" data-muted="true" href="https://github.com/evidenceprime/html-docx-js/commits?author=N1kto" aria-label="commits by N1kto" data-hovercard-url="/users/N1kto/hovercard" aria-keyshortcuts="Alt+ArrowUp">N1kto</a></div><span class=""></span></div><div class="d-none d-sm-flex LatestCommit-module__Box_2--JDY37"><div class="Truncate flex-items-center f5"><span class="Text__StyledText-sc-1klmep6-0 Truncate-text prc-Text-Text-9mHv3" data-testid="latest-commit-html"><a href="https://github.com/evidenceprime/html-docx-js/commit/6663a1137e878f3113f83326b62847e35a9d1a37" class="Link--secondary" data-pjax="true" data-hovercard-url="/evidenceprime/html-docx-js/commit/6663a1137e878f3113f83326b62847e35a9d1a37/hovercard" aria-keyshortcuts="Alt+ArrowUp">Changes paths for mhtDocumentParts. Updates /dist</a></span></div></div><span class="d-flex d-sm-none fgColor-muted f6"><relative-time tense="past" datetime="2016-05-17T13:31:00.000Z" title="May 17, 2016, 8:31 PM GMT+7"><template shadowrootmode="open">10 years ago</template>May 17, 2016</relative-time></span></div><div class="d-flex flex-shrink-0 gap-2"><div data-testid="latest-commit-details" class="d-none d-sm-flex flex-items-center"><span class="d-flex flex-nowrap fgColor-muted f6"><a class="Link--secondary prc-Link-Link-9ZwDx" aria-label="Commit 6663a11" data-hovercard-url="/evidenceprime/html-docx-js/commit/6663a1137e878f3113f83326b62847e35a9d1a37/hovercard" href="https://github.com/evidenceprime/html-docx-js/commit/6663a1137e878f3113f83326b62847e35a9d1a37" data-discover="true" aria-keyshortcuts="Alt+ArrowUp">6663a11</a>&nbsp;·&nbsp;<relative-time tense="past" datetime="2016-05-17T13:31:00.000Z" title="May 17, 2016, 8:31 PM GMT+7"><template shadowrootmode="open">10 years ago</template>May 17, 2016</relative-time></span></div><div class="d-flex gap-2"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vlUbc prc-Heading-Heading-MtWFE" data-testid="screen-reader-heading">History</h2><a href="https://github.com/evidenceprime/html-docx-js/commits/master/dist/html-docx.js" class="prc-Button-ButtonBase-9n-Xk d-none d-lg-flex LinkButton-module__code-view-link-button--thtqc flex-items-center fgColor-default" data-loading="false" data-size="small" data-variant="invisible"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-Iohp5"><span data-component="leadingVisual" class="prc-Button-Visual-YNt2F prc-Button-VisualWrap-E4cnq"><svg aria-hidden="true" focusable="false" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span><span data-component="text" class="prc-Button-Label-FWkx3"><span class="fgColor-default">History</span></span></span></a><div class="d-sm-none"><button data-component="IconButton" type="button" aria-pressed="false" aria-expanded="false" data-testid="latest-commit-details-toggle" class="prc-Button-ButtonBase-9n-Xk LatestCommit-module__IconButton--Zxaob prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-labelledby="_r_4u_"><svg aria-hidden="true" focusable="false" class="octicon octicon-ellipsis" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-tLeuB" data-direction="s" aria-hidden="true" id="_r_4u_" popover="auto">Open commit details</span></div><div class="d-flex d-lg-none"><span role="tooltip" aria-label="History" id="history-icon-button-tooltip" class="prc-Tooltip-Tooltip-JLsri prc-Tooltip-Tooltip--n-SqCQ- tooltipped-n"><a aria-label="View commit history for this file." href="https://github.com/evidenceprime/html-docx-js/commits/master/dist/html-docx.js" class="prc-Button-ButtonBase-9n-Xk LinkButton-module__code-view-link-button--thtqc flex-items-center fgColor-default" data-loading="false" data-size="small" data-variant="invisible" aria-describedby="history-icon-button-tooltip"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-Iohp5"><span data-component="leadingVisual" class="prc-Button-Visual-YNt2F prc-Button-VisualWrap-E4cnq"><svg aria-hidden="true" focusable="false" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span></span></a></span></div></div></div></div></div><div class="Box-sc-62in7e-0 hGzGyY"><div class="Box-sc-62in7e-0 cJXRZE container"><div class="Box-sc-62in7e-0 fpyUWF react-code-size-details-banner"><div class="react-code-size-details-banner CodeSizeDetails-module__Box--g57tw"><div class="text-mono CodeSizeDetails-module__Box_1--mgPJs"><div data-testid="blob-size" class="CodeSizeDetails-module__Truncate_1--SXHND prc-Truncate-Truncate-2G1eo" data-inline="true" title="406 KB" style="--truncate-max-width: 100%;"><span>13216 lines (11663 loc) · 406 KB</span></div></div></div></div><div class="Box-sc-62in7e-0 iafbuG react-blob-view-header-sticky" id="repos-sticky-header"><div class="BlobViewHeader-module__Box--kEu6z"><div class="react-blob-sticky-header"><div class="Box-sc-62in7e-0 iNRqcN"><div class="FileNameStickyHeader-module__Box_1--IABVr"><div class="FileNameStickyHeader-module__Box_2--lk5pv"><div class="FileNameStickyHeader-module__Box_3--vcfl4"><button type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" data-hotkey="w" aria-label="master branch" data-testid="anchor-button" class="prc-Button-ButtonBase-9n-Xk ref-selector-class RefSelectorAnchoredOverlay-module__RefSelectorOverlayBtn--D34zl" data-loading="false" data-size="medium" data-variant="default" id="ref-picker-repos-header-ref-selector"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-Iohp5"><span data-component="text" class="prc-Button-Label-FWkx3"><div class="RefSelectorAnchoredOverlay-module__RefSelectorOverlayContainer--mCbv8"><div class="RefSelectorAnchoredOverlay-module__RefSelectorOverlayHeader--D4cnZ"><svg aria-hidden="true" focusable="false" class="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg></div><div class="ref-selector-button-text-container RefSelectorAnchoredOverlay-module__RefSelectorBtnTextContainer--yO402" style="max-width: 125px;"><span class="RefSelectorAnchoredOverlay-module__RefSelectorText--bxVhQ">&nbsp;master</span></div></div></span><span data-component="trailingVisual" class="prc-Button-Visual-YNt2F prc-Button-VisualWrap-E4cnq"><svg aria-hidden="true" focusable="false" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></span></span></button><button hidden="" data-testid="ref-selector-hotkey-button" data-hotkey="w" data-hotkey-scope="read-only-cursor-text-area"></button></div><div class="FileNameStickyHeader-module__Box_4--Vz8VN"><div class="Breadcrumb-module__container--u5hNw Breadcrumb-module__md--YqBrk"><nav data-testid="breadcrumbs" aria-labelledby="sticky-breadcrumb-heading" id="sticky-breadcrumb" class="Breadcrumb-module__nav--kjUkO"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vlUbc prc-Heading-Heading-MtWFE" data-testid="screen-reader-heading" id="sticky-breadcrumb-heading">Breadcrumbs</h2><ol class="Breadcrumb-module__list--lkq0r"><li class="Breadcrumb-module__listItem--r4enD"><a class="Breadcrumb-module__repoLink--ZlDIS prc-Link-Link-9ZwDx" data-testid="breadcrumbs-repo-link" href="https://github.com/evidenceprime/html-docx-js/tree/master" data-discover="true">html-docx-js</a></li><li class="Breadcrumb-module__listItem--r4enD"><span class="Breadcrumb-module__separator--DqIXz Breadcrumb-module__md--YqBrk" aria-hidden="true">/</span><a class="Breadcrumb-module__directoryLink--pwiL6 prc-Link-Link-9ZwDx" href="https://github.com/evidenceprime/html-docx-js/tree/master/dist" data-discover="true">dist</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Breadcrumb-module__filename--n2aVJ"><span class="Breadcrumb-module__separator--DqIXz Breadcrumb-module__md--YqBrk" aria-hidden="true">/</span><h1 class="Breadcrumb-module__filenameHeading--Paorw Breadcrumb-module__md--YqBrk prc-Heading-Heading-MtWFE" tabindex="-1" id="sticky-file-name-id">html-docx.js</h1></div></div></div></div><button type="button" class="prc-Button-ButtonBase-9n-Xk Button__StyledButtonComponent-sc-vqy3e4-0 FileNameStickyHeader-module__Button--uOm_J FileNameStickyHeader-module__GoToTopButton--Ubgke" data-loading="false" data-size="small" data-variant="invisible"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-Iohp5"><span data-component="leadingVisual" class="prc-Button-Visual-YNt2F prc-Button-VisualWrap-E4cnq"><svg aria-hidden="true" focusable="false" class="octicon octicon-arrow-up" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M3.47 7.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L9 4.81v7.44a.75.75 0 0 1-1.5 0V4.81L4.53 7.78a.75.75 0 0 1-1.06 0Z"></path></svg></span><span data-component="text" class="prc-Button-Label-FWkx3">Top</span></span></button></div></div></div><div class="Box-sc-62in7e-0 koZdcA BlobViewHeader-module__Box_1--_sZV1"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vlUbc prc-Heading-Heading-MtWFE" data-testid="screen-reader-heading">File metadata and controls</h2><div class="BlobViewHeader-module__Box_2--fPJpL"><ul aria-label="File view" class="prc-SegmentedControl-SegmentedControl-lqIXp BlobTabButtons-module__SegmentedControl--UrXKO" data-variant="default" data-size="small"><li class="prc-SegmentedControl-Item-tSCQh" data-selected=""><button aria-current="true" class="prc-SegmentedControl-Button-E48xz" type="button" data-hotkey="Control+/ Control+c" style="--separator-color: transparent;"><span class="prc-SegmentedControl-Content-1COlk segmentedControl-content"><div class="prc-SegmentedControl-Text-7S2y2 segmentedControl-text" data-text="Code">Code</div></span></button></li><li class="prc-SegmentedControl-Item-tSCQh"><button aria-current="false" class="prc-SegmentedControl-Button-E48xz" type="button" data-hotkey="b,Shift+B,Control+/ Control+b" style="--separator-color: var(--borderColor-default);"><span class="prc-SegmentedControl-Content-1COlk segmentedControl-content"><div class="prc-SegmentedControl-Text-7S2y2 segmentedControl-text" data-text="Blame">Blame</div></span></button></li></ul><button hidden="" data-testid="" data-hotkey="Control+/ Control+c" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><div class="react-code-size-details-in-header CodeSizeDetails-module__Box--g57tw"><div class="text-mono CodeSizeDetails-module__Box_1--mgPJs"><div data-testid="blob-size" class="CodeSizeDetails-module__Truncate_1--SXHND prc-Truncate-Truncate-2G1eo" data-inline="true" title="406 KB" style="--truncate-max-width: 100%;"><span>13216 lines (11663 loc) · 406 KB</span></div></div></div></div><div class="BlobViewHeader-module__Box_3--c1yoS"><button hidden="" data-testid="" data-hotkey="Control+Shift+&gt;" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+Shift+&gt;"></button><button hidden="" data-testid="" data-hotkey="Control+Shift+&lt;" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+Shift+&lt;"></button><button data-component="IconButton" type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="prc-Button-ButtonBase-9n-Xk prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-labelledby="_r_49_" id="_r_48_"><svg aria-hidden="true" focusable="false" class="octicon octicon-space" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M0 13.25V2.75C0 1.784.784 1 1.75 1H5c.551 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1h6.75c.966 0 1.75.784 1.75 1.75v3.638a.75.75 0 0 1-1.5 0V4.75a.25.25 0 0 0-.25-.25H7.5a1.75 1.75 0 0 1-1.4-.7l-.9-1.2a.25.25 0 0 0-.2-.1H1.75a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h5.663l.076.004a.75.75 0 0 1 0 1.492L7.413 15H1.75A1.75 1.75 0 0 1 0 13.25Z"></path><path d="M12.265 9.16a.248.248 0 0 1 .467 0l.237.649a3.726 3.726 0 0 0 2.219 2.218l.649.238a.249.249 0 0 1 0 .467l-.649.237a3.728 3.728 0 0 0-2.219 2.219l-.237.649a.249.249 0 0 1-.467 0l-.238-.649a3.726 3.726 0 0 0-2.218-2.219l-.649-.237a.248.248 0 0 1 0-.467l.649-.238a3.725 3.725 0 0 0 2.218-2.218l.238-.649Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-tLeuB" data-direction="n" aria-hidden="true" id="_r_49_" popover="auto">Add to space</span><button data-component="IconButton" type="button" data-testid="copilot-ask-menu" class="prc-Button-ButtonBase-9n-Xk prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-labelledby="_r_4b_" id="blob-view-header-copilot-icon"><svg aria-hidden="true" focusable="false" class="octicon octicon-copilot" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-tLeuB" data-direction="n" aria-hidden="true" id="_r_4b_" popover="auto">Ask Copilot about this file</span><div class="react-blob-header-edit-and-raw-actions BlobViewHeader-module__Box_4--PCpYh"><div class="prc-ButtonGroup-ButtonGroup-vFUrY"><div><a href="https://github.com/evidenceprime/html-docx-js/raw/refs/heads/master/dist/html-docx.js" data-testid="raw-button" data-hotkey="Control+/ Control+r" class="prc-Button-ButtonBase-9n-Xk LinkButton-sc-1v6zkmg-0 iwmTUC BlobViewHeader-module__LinkButton--j1CPd" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-Iohp5"><span data-component="text" class="prc-Button-Label-FWkx3">Raw</span></span></a></div><div><button data-component="IconButton" type="button" data-testid="copy-raw-button" data-hotkey="Control+Shift+C" class="prc-Button-ButtonBase-9n-Xk IconButton__StyledIconButton-sc-i53dt6-0 prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-labelledby="_r_4e_"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-tLeuB" data-direction="n" aria-hidden="true" id="_r_4e_" popover="auto">Copy raw file</span></div><div><button data-component="IconButton" type="button" data-testid="download-raw-button" data-hotkey="Control+Shift+S" class="prc-Button-ButtonBase-9n-Xk IconButton__StyledIconButton-sc-i53dt6-0 gXjFlG prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-labelledby="_r_4g_"><svg aria-hidden="true" focusable="false" class="octicon octicon-download" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-tLeuB" data-direction="n" aria-hidden="true" id="_r_4g_" popover="auto">Download raw file</span></div></div><button hidden="" data-testid="raw-button-shortcut" data-hotkey="Control+/ Control+r" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="copy-raw-button-shortcut" data-hotkey="Control+Shift+C" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="download-raw-button-shortcut" data-hotkey="Control+Shift+S" data-hotkey-scope="read-only-cursor-text-area"></button><a class="js-github-dev-shortcut d-none prc-Link-Link-9ZwDx" data-hotkey="., Control+Shift+/" href="https://github.dev/"></a><button hidden="" data-testid="" data-hotkey="., Control+Shift+/" data-hotkey-scope="read-only-cursor-text-area"></button><a class="js-github-dev-new-tab-shortcut d-none prc-Link-Link-9ZwDx" data-hotkey="Shift+.,Shift+&gt;,&gt;" href="https://github.dev/" target="_blank"></a><button hidden="" data-testid="" data-hotkey="Shift+.,Shift+&gt;,&gt;" data-hotkey-scope="read-only-cursor-text-area"></button><div class="prc-ButtonGroup-ButtonGroup-vFUrY"><div><a data-component="IconButton" type="button" data-hotkey="e,Shift+E" data-testid="edit-button" class="prc-Button-ButtonBase-9n-Xk IconButton__StyledIconButton-sc-i53dt6-0 gRAczH prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-labelledby="_r_4i_" href="https://github.com/evidenceprime/html-docx-js/edit/master/dist/html-docx.js" data-discover="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-pencil" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg></a><span class="prc-TooltipV2-Tooltip-tLeuB" data-direction="nw" aria-hidden="true" id="_r_4i_" popover="auto">Fork this repository and edit the file</span></div><div><button data-component="IconButton" type="button" data-testid="more-edit-button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="prc-Button-ButtonBase-9n-Xk IconButton__StyledIconButton-sc-i53dt6-0 prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-labelledby="_r_4m_" id="_r_4k_"><svg aria-hidden="true" focusable="false" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-tLeuB" data-direction="nw" aria-hidden="true" id="_r_4m_" popover="auto">More edit options</span></div></div><button hidden="" data-testid="" data-hotkey="e,Shift+E" data-hotkey-scope="read-only-cursor-text-area"></button></div><button data-component="IconButton" type="button" aria-pressed="false" aria-expanded="false" aria-controls="symbols-pane" data-hotkey="Control+i" data-testid="symbols-button" class="prc-Button-ButtonBase-9n-Xk IconButton__StyledIconButton-sc-i53dt6-0 BlobViewHeader-module__IconButton_2--goIj9 prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-labelledby="_r_4o_" id="symbols-button"><svg aria-hidden="true" focusable="false" class="octicon octicon-code-square" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-tLeuB" data-direction="nw" aria-hidden="true" id="_r_4o_" popover="auto">Open symbols panel</span><div class="react-blob-header-edit-and-raw-actions-combined"><button data-component="IconButton" type="button" title="More file actions" data-testid="more-file-actions-button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="prc-Button-ButtonBase-9n-Xk IconButton__StyledIconButton-sc-i53dt6-0 js-blob-dropdown-click BlobViewHeader-module__IconButton--JW7qq prc-Button-IconButton-fyge7" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-labelledby="_r_4s_" id="_r_4q_"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-tLeuB" data-direction="nw" aria-hidden="true" id="_r_4s_" popover="auto">Edit and raw actions</span></div></div></div></div><div></div></div><div class="Box-sc-62in7e-0 doYuhf"><section aria-labelledby="file-name-id-wide file-name-id-mobile" class="Box-sc-62in7e-0 hhuNfn"><div class="Box-sc-62in7e-0 hNuvaP"><div id="highlighted-line-menu-positioner" class="position-relative"><div id="copilot-button-positioner" class="Box-sc-62in7e-0 kBkfpQ"><div class="Box-sc-62in7e-0 lnfLer"><div class="Box-sc-62in7e-0 ufhDn"><div class="Box-sc-62in7e-0 dgjmNw"><div aria-hidden="true" data-testid="navigation-cursor" class="Box-sc-62in7e-0 code-navigation-cursor" style="top: 0px; left: 92px;"> </div><button hidden="" data-testid="NavigationCursorEnter" data-hotkey="Control+Enter" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorSetHighlightedLine" data-hotkey="Shift+J" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorSetHighlightAndExpandMenu" data-hotkey="Alt+Shift+C,Alt+Shift+Ç" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorPageDown" data-hotkey="PageDown" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorPageUp" data-hotkey="PageUp" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="" data-hotkey="/" data-hotkey-scope="read-only-cursor-text-area"></button></div></div><textarea id="read-only-cursor-text-area" data-testid="read-only-cursor-text-area" aria-label="file content" aria-readonly="true" inputmode="none" tabindex="0" aria-multiline="true" aria-haspopup="false" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off" data-ms-editor="false" class="react-blob-textarea react-blob-print-hide" style="resize: none; margin-top: -2px; padding-left: 92px; padding-right: 70px; width: 100%; background-color: unset; box-sizing: border-box; color: transparent; position: absolute; border: none; tab-size: 4; outline: none; overflow: auto hidden; height: 264340px; font-size: 12px; line-height: 20px; overflow-wrap: normal; overscroll-behavior-x: none; white-space: pre; z-index: 1;">!function(e){if("object"==typeof exports&amp;&amp;"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&amp;&amp;define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&amp;&amp;(f=self),f.htmlDocx=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&amp;&amp;require;if(!u&amp;&amp;a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&amp;&amp;require;for(var o=0;o&lt;r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh &lt;feross@feross.org&gt; &lt;http://feross.org&gt;
 * @license  MIT
 */

var base64 = _dereq_('base64-js')
var ieee754 = _dereq_('ieee754')
var isArray = _dereq_('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &amp;&amp; // typed array instances can be augmented
        typeof arr.subarray === 'function' &amp;&amp; // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject &gt; 0 ? subject &gt;&gt;&gt; 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' &amp;&amp; subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' &amp;&amp; isArray(subject.data))
      subject = subject.data
    length = +subject.length &gt; 0 ? Math.floor(+subject.length) : 0
  } else
    throw new TypeError('must start with number, buffer, array or string')

  if (this.length &gt; kMaxLength)
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
      'size: 0x' + kMaxLength.toString(16) + ' bytes')

  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer.TYPED_ARRAY_SUPPORT &amp;&amp; typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i &lt; length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i &lt; length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' &amp;&amp; !Buffer.TYPED_ARRAY_SUPPORT &amp;&amp; !noZero) {
    for (i = 0; i &lt; length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

Buffer.isBuffer = function (b) {
  return !!(b != null &amp;&amp; b._isBuffer)
}

Buffer.compare = function (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
    throw new TypeError('Arguments must be Buffers')

  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i &lt; len &amp;&amp; a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x &lt; y) return -1
  if (y &lt; x) return 1
  return 0
}

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function (list, totalLength) {
  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i &lt; list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i &lt; list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    case 'hex':
      ret = str.length &gt;&gt;&gt; 1
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    default:
      ret = str.length
  }
  return ret
}

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function (encoding, start, end) {
  var loweredCase = false

  start = start &gt;&gt;&gt; 0
  end = end === undefined || end === Infinity ? this.length : end &gt;&gt;&gt; 0

  if (!encoding) encoding = 'utf8'
  if (start &lt; 0) start = 0
  if (end &gt; this.length) end = this.length
  if (end &lt;= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase)
          throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function (b) {
  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length &gt; 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length &gt; max)
      str += ' ... '
  }
  return '&lt;Buffer ' + str + '&gt;'
}

Buffer.prototype.compare = function (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length &gt; remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length &gt; strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i &lt; length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(byte)) throw new Error('Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length, 2)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length &gt; remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new TypeError('Unknown encoding: ' + encoding)
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 &amp;&amp; end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i &lt; end; i++) {
    if (buf[i] &lt;= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i &lt; end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start &lt; 0) start = 0
  if (!end || end &lt; 0 || end &gt; len) end = len

  var out = ''
  for (var i = start; i &lt; end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i &lt; bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start &lt; 0) {
    start += len;
    if (start &lt; 0)
      start = 0
  } else if (start &gt; len) {
    start = len
  }

  if (end &lt; 0) {
    end += len
    if (end &lt; 0)
      end = 0
  } else if (end &gt; len) {
    end = len
  }

  if (end &lt; start)
    end = start

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i &lt; sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset &lt; 0)
    throw new RangeError('offset is not uint')
  if (offset + ext &gt; length)
    throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] &lt;&lt; 8)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return (this[offset] &lt;&lt; 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] &lt;&lt; 8) |
      (this[offset + 2] &lt;&lt; 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
      ((this[offset + 1] &lt;&lt; 16) |
      (this[offset + 2] &lt;&lt; 8) |
      this[offset + 3])
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  if (!(this[offset] &amp; 0x80))
    return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] &lt;&lt; 8)
  return (val &amp; 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] &lt;&lt; 8)
  return (val &amp; 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset]) |
      (this[offset + 1] &lt;&lt; 8) |
      (this[offset + 2] &lt;&lt; 16) |
      (this[offset + 3] &lt;&lt; 24)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] &lt;&lt; 24) |
      (this[offset + 1] &lt;&lt; 16) |
      (this[offset + 2] &lt;&lt; 8) |
      (this[offset + 3])
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value &gt; max || value &lt; min) throw new TypeError('value is out of bounds')
  if (offset + ext &gt; buf.length) throw new TypeError('index out of range')
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset &gt;&gt;&gt; 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value &lt; 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i &lt; j; i++) {
    buf[offset + i] = (value &amp; (0xff &lt;&lt; (8 * (littleEndian ? i : 1 - i)))) &gt;&gt;&gt;
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset &gt;&gt;&gt; 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value &gt;&gt;&gt; 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset &gt;&gt;&gt; 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value &gt;&gt;&gt; 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value &lt; 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i &lt; j; i++) {
    buf[offset + i] = (value &gt;&gt;&gt; (littleEndian ? i : 3 - i) * 8) &amp; 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset &gt;&gt;&gt; 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value &gt;&gt;&gt; 24)
    this[offset + 2] = (value &gt;&gt;&gt; 16)
    this[offset + 1] = (value &gt;&gt;&gt; 8)
    this[offset] = value
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset &gt;&gt;&gt; 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value &gt;&gt;&gt; 24)
    this[offset + 1] = (value &gt;&gt;&gt; 16)
    this[offset + 2] = (value &gt;&gt;&gt; 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset &gt;&gt;&gt; 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value &lt; 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset &gt;&gt;&gt; 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value &gt;&gt;&gt; 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset &gt;&gt;&gt; 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value &gt;&gt;&gt; 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset &gt;&gt;&gt; 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value &gt;&gt;&gt; 8)
    this[offset + 2] = (value &gt;&gt;&gt; 16)
    this[offset + 3] = (value &gt;&gt;&gt; 24)
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset &gt;&gt;&gt; 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value &lt; 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value &gt;&gt;&gt; 24)
    this[offset + 1] = (value &gt;&gt;&gt; 16)
    this[offset + 2] = (value &gt;&gt;&gt; 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value &gt; max || value &lt; min) throw new TypeError('value is out of bounds')
  if (offset + ext &gt; buf.length) throw new TypeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end &amp;&amp; end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  if (end &lt; start) throw new TypeError('sourceEnd &lt; sourceStart')
  if (target_start &lt; 0 || target_start &gt;= target.length)
    throw new TypeError('targetStart out of bounds')
  if (start &lt; 0 || start &gt;= source.length) throw new TypeError('sourceStart out of bounds')
  if (end &lt; 0 || end &gt; source.length) throw new TypeError('sourceEnd out of bounds')

  // Are we oob?
  if (end &gt; this.length)
    end = this.length
  if (target.length - target_start &lt; end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len &lt; 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i &lt; len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end &lt; start) throw new TypeError('end &lt; start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start &lt; 0 || start &gt;= this.length) throw new TypeError('start out of bounds')
  if (end &lt; 0 || end &gt; this.length) throw new TypeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i &lt; end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i &lt; end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i &lt; len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject &amp;&amp; typeof subject === 'object' &amp;&amp;
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n &lt; 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i &lt; str.length; i++) {
    var b = str.charCodeAt(i)
    if (b &lt;= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b &gt;= 0xD800 &amp;&amp; b &lt;= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j &lt; h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i &lt; str.length; i++) {
    // Node's code seems to be doing this and not &amp; 0x7F..
    byteArray.push(str.charCodeAt(i) &amp; 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i &lt; str.length; i++) {
    c = str.charCodeAt(i)
    hi = c &gt;&gt; 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length, unitSize) {
  if (unitSize) length -= length % unitSize;
  for (var i = 0; i &lt; length; i++) {
    if ((i + offset &gt;= dst.length) || (i &gt;= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":2,"ieee754":3,"is-array":4}],2:[function(_dereq_,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code &lt; NUMBER)
			return -1 //no match
		if (code &lt; NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code &lt; UPPER + 26)
			return code - UPPER
		if (code &lt; LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 &gt; 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders &gt; 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i &lt; l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) &lt;&lt; 18) | (decode(b64.charAt(i + 1)) &lt;&lt; 12) | (decode(b64.charAt(i + 2)) &lt;&lt; 6) | decode(b64.charAt(i + 3))
			push((tmp &amp; 0xFF0000) &gt;&gt; 16)
			push((tmp &amp; 0xFF00) &gt;&gt; 8)
			push(tmp &amp; 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) &lt;&lt; 2) | (decode(b64.charAt(i + 1)) &gt;&gt; 4)
			push(tmp &amp; 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) &lt;&lt; 10) | (decode(b64.charAt(i + 1)) &lt;&lt; 4) | (decode(b64.charAt(i + 2)) &gt;&gt; 2)
			push((tmp &gt;&gt; 8) &amp; 0xFF)
			push(tmp &amp; 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num &gt;&gt; 18 &amp; 0x3F) + encode(num &gt;&gt; 12 &amp; 0x3F) + encode(num &gt;&gt; 6 &amp; 0x3F) + encode(num &amp; 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i &lt; length; i += 3) {
			temp = (uint8[i] &lt;&lt; 16) + (uint8[i + 1] &lt;&lt; 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp &gt;&gt; 2)
				output += encode((temp &lt;&lt; 4) &amp; 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] &lt;&lt; 8) + (uint8[uint8.length - 1])
				output += encode(temp &gt;&gt; 10)
				output += encode((temp &gt;&gt; 4) &amp; 0x3F)
				output += encode((temp &lt;&lt; 2) &amp; 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],3:[function(_dereq_,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 &lt;&lt; eLen) - 1
  var eBias = eMax &gt;&gt; 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s &amp; ((1 &lt;&lt; (-nBits)) - 1)
  s &gt;&gt;= (-nBits)
  nBits += eLen
  for (; nBits &gt; 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e &amp; ((1 &lt;&lt; (-nBits)) - 1)
  e &gt;&gt;= (-nBits)
  nBits += mLen
  for (; nBits &gt; 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 &lt;&lt; eLen) - 1
  var eBias = eMax &gt;&gt; 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value &lt; 0 || (value === 0 &amp;&amp; 1 / value &lt; 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) &lt; 1) {
      e--
      c *= 2
    }
    if (e + eBias &gt;= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c &gt;= 2) {
      e++
      c /= 2
    }

    if (e + eBias &gt;= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias &gt;= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen &gt;= 8; buffer[offset + i] = m &amp; 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e &lt;&lt; mLen) | m
  eLen += mLen
  for (; eLen &gt; 0; buffer[offset + i] = e &amp; 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],4:[function(_dereq_,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // &gt; true
 *        isArray(arguments);
 *        // &gt; false
 *        isArray('');
 *        // &gt; false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val &amp;&amp; '[object Array]' == str.call(val);
};

},{}],5:[function(_dereq_,module,exports){
'use strict';
var DataReader = _dereq_('./dataReader');

function ArrayReader(data) {
    if (data) {
        this.data = data;
        this.length = this.data.length;
        this.index = 0;
        this.zero = 0;

        for(var i = 0; i &lt; this.data.length; i++) {
            data[i] = data[i] &amp; 0xFF;
        }
    }
}
ArrayReader.prototype = new DataReader();
/**
 * @see DataReader.byteAt
 */
ArrayReader.prototype.byteAt = function(i) {
    return this.data[this.zero + i];
};
/**
 * @see DataReader.lastIndexOfSignature
 */
ArrayReader.prototype.lastIndexOfSignature = function(sig) {
    var sig0 = sig.charCodeAt(0),
        sig1 = sig.charCodeAt(1),
        sig2 = sig.charCodeAt(2),
        sig3 = sig.charCodeAt(3);
    for (var i = this.length - 4; i &gt;= 0; --i) {
        if (this.data[i] === sig0 &amp;&amp; this.data[i + 1] === sig1 &amp;&amp; this.data[i + 2] === sig2 &amp;&amp; this.data[i + 3] === sig3) {
            return i - this.zero;
        }
    }

    return -1;
};
/**
 * @see DataReader.readData
 */
ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        return [];
    }
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = ArrayReader;

},{"./dataReader":10}],6:[function(_dereq_,module,exports){
'use strict';
// private property
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";


// public method for encoding
exports.encode = function(input, utf8) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    while (i &lt; input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 &gt;&gt; 2;
        enc2 = ((chr1 &amp; 3) &lt;&lt; 4) | (chr2 &gt;&gt; 4);
        enc3 = ((chr2 &amp; 15) &lt;&lt; 2) | (chr3 &gt;&gt; 6);
        enc4 = chr3 &amp; 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        }
        else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);

    }

    return output;
};

// public method for decoding
exports.decode = function(input, utf8) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i &lt; input.length) {

        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 &lt;&lt; 2) | (enc2 &gt;&gt; 4);
        chr2 = ((enc2 &amp; 15) &lt;&lt; 4) | (enc3 &gt;&gt; 2);
        chr3 = ((enc3 &amp; 3) &lt;&lt; 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    return output;

};

},{}],7:[function(_dereq_,module,exports){
'use strict';
function CompressedObject() {
    this.compressedSize = 0;
    this.uncompressedSize = 0;
    this.crc32 = 0;
    this.compressionMethod = null;
    this.compressedContent = null;
}

CompressedObject.prototype = {
    /**
     * Return the decompressed content in an unspecified format.
     * The format will depend on the decompressor.
     * @return {Object} the decompressed content.
     */
    getContent: function() {
        return null; // see implementation
    },
    /**
     * Return the compressed content in an unspecified format.
     * The format will depend on the compressed conten source.
     * @return {Object} the compressed content.
     */
    getCompressedContent: function() {
        return null; // see implementation
    }
};
module.exports = CompressedObject;

},{}],8:[function(_dereq_,module,exports){
'use strict';
exports.STORE = {
    magic: "\x00\x00",
    compress: function(content, compressionOptions) {
        return content; // no compression
    },
    uncompress: function(content) {
        return content; // no compression
    },
    compressInputType: null,
    uncompressInputType: null
};
exports.DEFLATE = _dereq_('./flate');

},{"./flate":13}],9:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./utils');

var table = [
    0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA,
    0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
    0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,
    0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91,
    0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
    0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
    0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC,
    0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5,
    0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,
    0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
    0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940,
    0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,
    0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116,
    0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
    0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
    0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
    0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A,
    0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
    0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818,
    0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
    0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,
    0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457,
    0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C,
    0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,
    0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
    0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB,
    0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,
    0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9,
    0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086,
    0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
    0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4,
    0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD,
    0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A,
    0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683,
    0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
    0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1,
    0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE,
    0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7,
    0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,
    0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
    0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252,
    0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,
    0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60,
    0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79,
    0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
    0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F,
    0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04,
    0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,
    0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A,
    0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
    0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38,
    0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21,
    0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E,
    0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,
    0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
    0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45,
    0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,
    0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB,
    0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0,
    0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
    0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6,
    0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF,
    0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,
    0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D
];

/**
 *
 *  Javascript crc32
 *  http://www.webtoolkit.info/
 *
 */
module.exports = function crc32(input, crc) {
    if (typeof input === "undefined" || !input.length) {
        return 0;
    }

    var isArray = utils.getTypeOf(input) !== "string";

    if (typeof(crc) == "undefined") {
        crc = 0;
    }
    var x = 0;
    var y = 0;
    var b = 0;

    crc = crc ^ (-1);
    for (var i = 0, iTop = input.length; i &lt; iTop; i++) {
        b = isArray ? input[i] : input.charCodeAt(i);
        y = (crc ^ b) &amp; 0xFF;
        x = table[y];
        crc = (crc &gt;&gt;&gt; 8) ^ x;
    }

    return crc ^ (-1);
};
// vim: set shiftwidth=4 softtabstop=4:

},{"./utils":26}],10:[function(_dereq_,module,exports){
'use strict';
var utils = _dereq_('./utils');

function DataReader(data) {
    this.data = null; // type : see implementation
    this.length = 0;
    this.index = 0;
    this.zero = 0;
}
DataReader.prototype = {
    /**
     * Check that the offset will not go too far.
     * @param {string} offset the additional offset to check.
     * @throws {Error} an Error if the offset is out of bounds.
     */
    checkOffset: function(offset) {
        this.checkIndex(this.index + offset);
    },
    /**
     * Check that the specifed index will not be too far.
     * @param {string} newIndex the index to check.
     * @throws {Error} an Error if the index is out of bounds.
     */
    checkIndex: function(newIndex) {
        if (this.length &lt; this.zero + newIndex || newIndex &lt; 0) {
            throw new Error("End of data reached (data length = " + this.length + ", asked index = " + (newIndex) + "). Corrupted zip ?");
        }
    },
    /**
     * Change the index.
     * @param {number} newIndex The new index.
     * @throws {Error} if the new index is out of the data.
     */
    setIndex: function(newIndex) {
        this.checkIndex(newIndex);
        this.index = newIndex;
    },
    /**
     * Skip the next n bytes.
     * @param {number} n the number of bytes to skip.
     * @throws {Error} if the new index is out of the data.
     */
    skip: function(n) {
        this.setIndex(this.index + n);
    },
    /**
     * Get the byte at the specified index.
     * @param {number} i the index to use.
     * @return {number} a byte.
     */
    byteAt: function(i) {
        // see implementations
    },
    /**
     * Get the next number with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {number} the corresponding number.
     */
    readInt: function(size) {
        var result = 0,
            i;
        this.checkOffset(size);
        for (i = this.index + size - 1; i &gt;= this.index; i--) {
            result = (result &lt;&lt; 8) + this.byteAt(i);
        }
        this.index += size;
        return result;
    },
    /**
     * Get the next string with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {string} the corresponding string.
     */
    readString: function(size) {
        return utils.transformTo("string", this.readData(size));
    },
    /**
     * Get raw data without conversion, &lt;size&gt; bytes.
     * @param {number} size the number of bytes to read.
     * @return {Object} the raw data, implementation specific.
     */
    readData: function(size) {
        // see implementations
    },
    /**
     * Find the last occurence of a zip signature (4 bytes).
     * @param {string} sig the signature to find.
     * @return {number} the index of the last occurence, -1 if not found.
     */
    lastIndexOfSignature: function(sig) {
        // see implementations
    },
    /**
     * Get the next date.
     * @return {Date} the date.
     */
    readDate: function() {
        var dostime = this.readInt(4);
        return new Date(
        ((dostime &gt;&gt; 25) &amp; 0x7f) + 1980, // year
        ((dostime &gt;&gt; 21) &amp; 0x0f) - 1, // month
        (dostime &gt;&gt; 16) &amp; 0x1f, // day
        (dostime &gt;&gt; 11) &amp; 0x1f, // hour
        (dostime &gt;&gt; 5) &amp; 0x3f, // minute
        (dostime &amp; 0x1f) &lt;&lt; 1); // second
    }
};
module.exports = DataReader;

},{"./utils":26}],11:[function(_dereq_,module,exports){
'use strict';
exports.base64 = false;
exports.binary = false;
exports.dir = false;
exports.createFolders = false;
exports.date = null;
exports.compression = null;
exports.compressionOptions = null;
exports.comment = null;
exports.unixPermissions = null;
exports.dosPermissions = null;

},{}],12:[function(_dereq_,module,exports){
'use strict';
var utils = _dereq_('./utils');

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.string2binary = function(str) {
    return utils.string2binary(str);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.string2Uint8Array = function(str) {
    return utils.transformTo("uint8array", str);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.uint8Array2String = function(array) {
    return utils.transformTo("string", array);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.string2Blob = function(str) {
    var buffer = utils.transformTo("arraybuffer", str);
    return utils.arrayBuffer2Blob(buffer);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.arrayBuffer2Blob = function(buffer) {
    return utils.arrayBuffer2Blob(buffer);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.transformTo = function(outputType, input) {
    return utils.transformTo(outputType, input);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.getTypeOf = function(input) {
    return utils.getTypeOf(input);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.checkSupport = function(type) {
    return utils.checkSupport(type);
};

/**
 * @deprecated
 * This value will be removed in a future version without replacement.
 */
exports.MAX_VALUE_16BITS = utils.MAX_VALUE_16BITS;

/**
 * @deprecated
 * This value will be removed in a future version without replacement.
 */
exports.MAX_VALUE_32BITS = utils.MAX_VALUE_32BITS;


/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.pretty = function(str) {
    return utils.pretty(str);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.findCompression = function(compressionMethod) {
    return utils.findCompression(compressionMethod);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.isRegExp = function (object) {
    return utils.isRegExp(object);
};


},{"./utils":26}],13:[function(_dereq_,module,exports){
'use strict';
var USE_TYPEDARRAY = (typeof Uint8Array !== 'undefined') &amp;&amp; (typeof Uint16Array !== 'undefined') &amp;&amp; (typeof Uint32Array !== 'undefined');

var pako = _dereq_("pako");
exports.uncompressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
exports.compressInputType = USE_TYPEDARRAY ? "uint8array" : "array";

exports.magic = "\x08\x00";
exports.compress = function(input, compressionOptions) {
    return pako.deflateRaw(input, {
        level : compressionOptions.level || -1 // default compression
    });
};
exports.uncompress =  function(input) {
    return pako.inflateRaw(input);
};

},{"pako":29}],14:[function(_dereq_,module,exports){
'use strict';

var base64 = _dereq_('./base64');

/**
Usage:
   zip = new JSZip();
   zip.file("hello.txt", "Hello, World!").file("tempfile", "nothing");
   zip.folder("images").file("smile.gif", base64Data, {base64: true});
   zip.file("Xmas.txt", "Ho ho ho !", {date : new Date("December 25, 2007 00:00:01")});
   zip.remove("tempfile");

   base64zip = zip.generate();

**/

/**
 * Representation a of zip file in js
 * @constructor
 * @param {String=|ArrayBuffer=|Uint8Array=} data the data to load, if any (optional).
 * @param {Object=} options the options for creating this objects (optional).
 */
function JSZip(data, options) {
    // if this constructor is&nbsp;used without&nbsp;`new`, it&nbsp;adds `new` before&nbsp;itself:
    if(!(this instanceof JSZip)) return new JSZip(data, options);

    // object containing the files :
    // {
    //   "folder/" : {...},
    //   "folder/data.txt" : {...}
    // }
    this.files = {};

    this.comment = null;

    // Where we are in the hierarchy
    this.root = "";
    if (data) {
        this.load(data, options);
    }
    this.clone = function() {
        var newObj = new JSZip();
        for (var i in this) {
            if (typeof this[i] !== "function") {
                newObj[i] = this[i];
            }
        }
        return newObj;
    };
}
JSZip.prototype = _dereq_('./object');
JSZip.prototype.load = _dereq_('./load');
JSZip.support = _dereq_('./support');
JSZip.defaults = _dereq_('./defaults');

/**
 * @deprecated
 * This namespace will be removed in a future version without replacement.
 */
JSZip.utils = _dereq_('./deprecatedPublicUtils');

JSZip.base64 = {
    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    encode : function(input) {
        return base64.encode(input);
    },
    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    decode : function(input) {
        return base64.decode(input);
    }
};
JSZip.compressions = _dereq_('./compressions');
module.exports = JSZip;

},{"./base64":6,"./compressions":8,"./defaults":11,"./deprecatedPublicUtils":12,"./load":15,"./object":18,"./support":22}],15:[function(_dereq_,module,exports){
'use strict';
var base64 = _dereq_('./base64');
var utf8 = _dereq_('./utf8');
var utils = _dereq_('./utils');
var ZipEntries = _dereq_('./zipEntries');
module.exports = function(data, options) {
    var files, zipEntries, i, input;
    options = utils.extend(options || {}, {
        base64: false,
        checkCRC32: false,
        optimizedBinaryString : false,
        createFolders: false,
        decodeFileName: utf8.utf8decode
    });
    if (options.base64) {
        data = base64.decode(data);
    }

    zipEntries = new ZipEntries(data, options);
    files = zipEntries.files;
    for (i = 0; i &lt; files.length; i++) {
        input = files[i];
        this.file(input.fileNameStr, input.decompressed, {
            binary: true,
            optimizedBinaryString: true,
            date: input.date,
            dir: input.dir,
            comment : input.fileCommentStr.length ? input.fileCommentStr : null,
            unixPermissions : input.unixPermissions,
            dosPermissions : input.dosPermissions,
            createFolders: options.createFolders
        });
    }
    if (zipEntries.zipComment.length) {
        this.comment = zipEntries.zipComment;
    }

    return this;
};

},{"./base64":6,"./utf8":25,"./utils":26,"./zipEntries":27}],16:[function(_dereq_,module,exports){
(function (Buffer){
'use strict';
module.exports = function(data, encoding){
    return new Buffer(data, encoding);
};
module.exports.test = function(b){
    return Buffer.isBuffer(b);
};

}).call(this,_dereq_("buffer").Buffer)
},{"buffer":1}],17:[function(_dereq_,module,exports){
'use strict';
var Uint8ArrayReader = _dereq_('./uint8ArrayReader');

function NodeBufferReader(data) {
    this.data = data;
    this.length = this.data.length;
    this.index = 0;
    this.zero = 0;
}
NodeBufferReader.prototype = new Uint8ArrayReader();

/**
 * @see DataReader.readData
 */
NodeBufferReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = NodeBufferReader;

},{"./uint8ArrayReader":23}],18:[function(_dereq_,module,exports){
'use strict';
var support = _dereq_('./support');
var utils = _dereq_('./utils');
var crc32 = _dereq_('./crc32');
var signature = _dereq_('./signature');
var defaults = _dereq_('./defaults');
var base64 = _dereq_('./base64');
var compressions = _dereq_('./compressions');
var CompressedObject = _dereq_('./compressedObject');
var nodeBuffer = _dereq_('./nodeBuffer');
var utf8 = _dereq_('./utf8');
var StringWriter = _dereq_('./stringWriter');
var Uint8ArrayWriter = _dereq_('./uint8ArrayWriter');

/**
 * Returns the raw data of a ZipObject, decompress the content if necessary.
 * @param {ZipObject} file the file to use.
 * @return {String|ArrayBuffer|Uint8Array|Buffer} the data.
 */
var getRawData = function(file) {
    if (file._data instanceof CompressedObject) {
        file._data = file._data.getContent();
        file.options.binary = true;
        file.options.base64 = false;

        if (utils.getTypeOf(file._data) === "uint8array") {
            var copy = file._data;
            // when reading an arraybuffer, the CompressedObject mechanism will keep it and subarray() a Uint8Array.
            // if we request a file in the same format, we might get the same Uint8Array or its ArrayBuffer (the original zip file).
            file._data = new Uint8Array(copy.length);
            // with an empty Uint8Array, Opera fails with a "Offset larger than array size"
            if (copy.length !== 0) {
                file._data.set(copy, 0);
            }
        }
    }
    return file._data;
};

/**
 * Returns the data of a ZipObject in a binary form. If the content is an unicode string, encode it.
 * @param {ZipObject} file the file to use.
 * @return {String|ArrayBuffer|Uint8Array|Buffer} the data.
 */
var getBinaryData = function(file) {
    var result = getRawData(file),
        type = utils.getTypeOf(result);
    if (type === "string") {
        if (!file.options.binary) {
            // unicode text !
            // unicode string =&gt; binary string is a painful process, check if we can avoid it.
            if (support.nodebuffer) {
                return nodeBuffer(result, "utf-8");
            }
        }
        return file.asBinary();
    }
    return result;
};

/**
 * Transform this._data into a string.
 * @param {function} filter a function String -&gt; String, applied if not null on the result.
 * @return {String} the string representing this._data.
 */
var dataToString = function(asUTF8) {
    var result = getRawData(this);
    if (result === null || typeof result === "undefined") {
        return "";
    }
    // if the data is a base64 string, we decode it before checking the encoding !
    if (this.options.base64) {
        result = base64.decode(result);
    }
    if (asUTF8 &amp;&amp; this.options.binary) {
        // JSZip.prototype.utf8decode supports arrays as input
        // skip to array =&gt; string step, utf8decode will do it.
        result = out.utf8decode(result);
    }
    else {
        // no utf8 transformation, do the array =&gt; string step.
        result = utils.transformTo("string", result);
    }

    if (!asUTF8 &amp;&amp; !this.options.binary) {
        result = utils.transformTo("string", out.utf8encode(result));
    }
    return result;
};
/**
 * A simple object representing a file in the zip file.
 * @constructor
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data
 * @param {Object} options the options of the file
 */
var ZipObject = function(name, data, options) {
    this.name = name;
    this.dir = options.dir;
    this.date = options.date;
    this.comment = options.comment;
    this.unixPermissions = options.unixPermissions;
    this.dosPermissions = options.dosPermissions;

    this._data = data;
    this.options = options;

    /*
     * This object contains initial values for dir and date.
     * With them, we can check if the user changed the deprecated metadata in
     * `ZipObject#options` or not.
     */
    this._initialMetadata = {
      dir : options.dir,
      date : options.date
    };
};

ZipObject.prototype = {
    /**
     * Return the content as UTF8 string.
     * @return {string} the UTF8 string.
     */
    asText: function() {
        return dataToString.call(this, true);
    },
    /**
     * Returns the binary content.
     * @return {string} the content as binary.
     */
    asBinary: function() {
        return dataToString.call(this, false);
    },
    /**
     * Returns the content as a nodejs Buffer.
     * @return {Buffer} the content as a Buffer.
     */
    asNodeBuffer: function() {
        var result = getBinaryData(this);
        return utils.transformTo("nodebuffer", result);
    },
    /**
     * Returns the content as an Uint8Array.
     * @return {Uint8Array} the content as an Uint8Array.
     */
    asUint8Array: function() {
        var result = getBinaryData(this);
        return utils.transformTo("uint8array", result);
    },
    /**
     * Returns the content as an ArrayBuffer.
     * @return {ArrayBuffer} the content as an ArrayBufer.
     */
    asArrayBuffer: function() {
        return this.asUint8Array().buffer;
    }
};

/**
 * Transform an integer into a string in hexadecimal.
 * @private
 * @param {number} dec the number to convert.
 * @param {number} bytes the number of bytes to generate.
 * @returns {string} the result.
 */
var decToHex = function(dec, bytes) {
    var hex = "",
        i;
    for (i = 0; i &lt; bytes; i++) {
        hex += String.fromCharCode(dec &amp; 0xff);
        dec = dec &gt;&gt;&gt; 8;
    }
    return hex;
};

/**
 * Transforms the (incomplete) options from the user into the complete
 * set of options to create a file.
 * @private
 * @param {Object} o the options from the user.
 * @return {Object} the complete set of options.
 */
var prepareFileAttrs = function(o) {
    o = o || {};
    if (o.base64 === true &amp;&amp; (o.binary === null || o.binary === undefined)) {
        o.binary = true;
    }
    o = utils.extend(o, defaults);
    o.date = o.date || new Date();
    if (o.compression !== null) o.compression = o.compression.toUpperCase();

    return o;
};

/**
 * Add a file in the current folder.
 * @private
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data of the file
 * @param {Object} o the options of the file
 * @return {Object} the new file.
 */
var fileAdd = function(name, data, o) {
    // be sure sub folders exist
    var dataType = utils.getTypeOf(data),
        parent;

    o = prepareFileAttrs(o);

    if (typeof o.unixPermissions === "string") {
        o.unixPermissions = parseInt(o.unixPermissions, 8);
    }

    // UNX_IFDIR  0040000 see zipinfo.c
    if (o.unixPermissions &amp;&amp; (o.unixPermissions &amp; 0x4000)) {
        o.dir = true;
    }
    // Bit 4    Directory
    if (o.dosPermissions &amp;&amp; (o.dosPermissions &amp; 0x0010)) {
        o.dir = true;
    }

    if (o.dir) {
        name = forceTrailingSlash(name);
    }

    if (o.createFolders &amp;&amp; (parent = parentFolder(name))) {
        folderAdd.call(this, parent, true);
    }

    if (o.dir || data === null || typeof data === "undefined") {
        o.base64 = false;
        o.binary = false;
        data = null;
        dataType = null;
    }
    else if (dataType === "string") {
        if (o.binary &amp;&amp; !o.base64) {
            // optimizedBinaryString == true means that the file has already been filtered with a 0xFF mask
            if (o.optimizedBinaryString !== true) {
                // this is a string, not in a base64 format.
                // Be sure that this is a correct "binary string"
                data = utils.string2binary(data);
            }
        }
    }
    else { // arraybuffer, uint8array, ...
        o.base64 = false;
        o.binary = true;

        if (!dataType &amp;&amp; !(data instanceof CompressedObject)) {
            throw new Error("The data of '" + name + "' is in an unsupported format !");
        }

        // special case : it's way easier to work with Uint8Array than with ArrayBuffer
        if (dataType === "arraybuffer") {
            data = utils.transformTo("uint8array", data);
        }
    }

    var object = new ZipObject(name, data, o);
    this.files[name] = object;
    return object;
};

/**
 * Find the parent folder of the path.
 * @private
 * @param {string} path the path to use
 * @return {string} the parent folder, or ""
 */
var parentFolder = function (path) {
    if (path.slice(-1) == '/') {
        path = path.substring(0, path.length - 1);
    }
    var lastSlash = path.lastIndexOf('/');
    return (lastSlash &gt; 0) ? path.substring(0, lastSlash) : "";
};


/**
 * Returns the path with a slash at the end.
 * @private
 * @param {String} path the path to check.
 * @return {String} the path with a trailing slash.
 */
var forceTrailingSlash = function(path) {
    // Check the name ends with a /
    if (path.slice(-1) != "/") {
        path += "/"; // IE doesn't like substr(-1)
    }
    return path;
};
/**
 * Add a (sub) folder in the current folder.
 * @private
 * @param {string} name the folder's name
 * @param {boolean=} [createFolders] If true, automatically create sub
 *  folders. Defaults to false.
 * @return {Object} the new folder.
 */
var folderAdd = function(name, createFolders) {
    createFolders = (typeof createFolders !== 'undefined') ? createFolders : false;

    name = forceTrailingSlash(name);

    // Does this folder already exist?
    if (!this.files[name]) {
        fileAdd.call(this, name, null, {
            dir: true,
            createFolders: createFolders
        });
    }
    return this.files[name];
};

/**
 * Generate a JSZip.CompressedObject for a given zipOject.
 * @param {ZipObject} file the object to read.
 * @param {JSZip.compression} compression the compression to use.
 * @param {Object} compressionOptions the options to use when compressing.
 * @return {JSZip.CompressedObject} the compressed result.
 */
var generateCompressedObjectFrom = function(file, compression, compressionOptions) {
    var result = new CompressedObject(),
        content;

    // the data has not been decompressed, we might reuse things !
    if (file._data instanceof CompressedObject) {
        result.uncompressedSize = file._data.uncompressedSize;
        result.crc32 = file._data.crc32;

        if (result.uncompressedSize === 0 || file.dir) {
            compression = compressions['STORE'];
            result.compressedContent = "";
            result.crc32 = 0;
        }
        else if (file._data.compressionMethod === compression.magic) {
            result.compressedContent = file._data.getCompressedContent();
        }
        else {
            content = file._data.getContent();
            // need to decompress / recompress
            result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content), compressionOptions);
        }
    }
    else {
        // have uncompressed data
        content = getBinaryData(file);
        if (!content || content.length === 0 || file.dir) {
            compression = compressions['STORE'];
            content = "";
        }
        result.uncompressedSize = content.length;
        result.crc32 = crc32(content);
        result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content), compressionOptions);
    }

    result.compressedSize = result.compressedContent.length;
    result.compressionMethod = compression.magic;

    return result;
};




/**
 * Generate the UNIX part of the external file attributes.
 * @param {Object} unixPermissions the unix permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * adapted from http://unix.stackexchange.com/questions/14705/the-zip-formats-external-file-attribute :
 *
 * TTTTsstrwxrwxrwx0000000000ADVSHR
 * ^^^^____________________________ file type, see zipinfo.c (UNX_*)
 *     ^^^_________________________ setuid, setgid, sticky
 *        ^^^^^^^^^________________ permissions
 *                 ^^^^^^^^^^______ not used ?
 *                           ^^^^^^ DOS attribute bits : Archive, Directory, Volume label, System file, Hidden, Read only
 */
var generateUnixExternalFileAttr = function (unixPermissions, isDir) {

    var result = unixPermissions;
    if (!unixPermissions) {
        // I can't use octal values in strict mode, hence the hexa.
        //  040775 =&gt; 0x41fd
        // 0100664 =&gt; 0x81b4
        result = isDir ? 0x41fd : 0x81b4;
    }

    return (result &amp; 0xFFFF) &lt;&lt; 16;
};

/**
 * Generate the DOS part of the external file attributes.
 * @param {Object} dosPermissions the dos permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * Bit 0     Read-Only
 * Bit 1     Hidden
 * Bit 2     System
 * Bit 3     Volume Label
 * Bit 4     Directory
 * Bit 5     Archive
 */
var generateDosExternalFileAttr = function (dosPermissions, isDir) {

    // the dir flag is already set for compatibility

    return (dosPermissions || 0)  &amp; 0x3F;
};

/**
 * Generate the various parts used in the construction of the final zip file.
 * @param {string} name the file name.
 * @param {ZipObject} file the file content.
 * @param {JSZip.CompressedObject} compressedObject the compressed object.
 * @param {number} offset the current offset from the start of the zip file.
 * @param {String} platform let's pretend we are this platform (change platform dependents fields)
 * @param {Function} encodeFileName the function to encode the file name / comment.
 * @return {object} the zip parts.
 */
var generateZipParts = function(name, file, compressedObject, offset, platform, encodeFileName) {
    var data = compressedObject.compressedContent,
        useCustomEncoding = encodeFileName !== utf8.utf8encode,
        encodedFileName = utils.transformTo("string", encodeFileName(file.name)),
        utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)),
        comment = file.comment || "",
        encodedComment = utils.transformTo("string", encodeFileName(comment)),
        utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)),
        useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
        useUTF8ForComment = utfEncodedComment.length !== comment.length,
        o = file.options,
        dosTime,
        dosDate,
        extraFields = "",
        unicodePathExtraField = "",
        unicodeCommentExtraField = "",
        dir, date;


    // handle the deprecated options.dir
    if (file._initialMetadata.dir !== file.dir) {
        dir = file.dir;
    } else {
        dir = o.dir;
    }

    // handle the deprecated options.date
    if(file._initialMetadata.date !== file.date) {
        date = file.date;
    } else {
        date = o.date;
    }

    var extFileAttr = 0;
    var versionMadeBy = 0;
    if (dir) {
        // dos or unix, we set the dos dir flag
        extFileAttr |= 0x00010;
    }
    if(platform === "UNIX") {
        versionMadeBy = 0x031E; // UNIX, version 3.0
        extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
    } else { // DOS or other, fallback to DOS
        versionMadeBy = 0x0014; // DOS, version 2.0
        extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
    }

    // date
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/52/13.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/65/16.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/66/16.html

    dosTime = date.getHours();
    dosTime = dosTime &lt;&lt; 6;
    dosTime = dosTime | date.getMinutes();
    dosTime = dosTime &lt;&lt; 5;
    dosTime = dosTime | date.getSeconds() / 2;

    dosDate = date.getFullYear() - 1980;
    dosDate = dosDate &lt;&lt; 4;
    dosDate = dosDate | (date.getMonth() + 1);
    dosDate = dosDate &lt;&lt; 5;
    dosDate = dosDate | date.getDate();

    if (useUTF8ForFileName) {
        // set the unicode path extra field. unzip needs at least one extra
        // field to correctly handle unicode path, so using the path is as good
        // as any other information. This could improve the situation with
        // other archive managers too.
        // This field is usually used without the utf8 flag, with a non
        // unicode path in the header (winrar, winzip). This helps (a bit)
        // with the messy Windows' default compressed folders feature but
        // breaks on p7zip which doesn't seek the unicode path extra field.
        // So for now, UTF-8 everywhere !
        unicodePathExtraField =
            // Version
            decToHex(1, 1) +
            // NameCRC32
            decToHex(crc32(encodedFileName), 4) +
            // UnicodeName
            utfEncodedFileName;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x70" +
            // size
            decToHex(unicodePathExtraField.length, 2) +
            // content
            unicodePathExtraField;
    }

    if(useUTF8ForComment) {

        unicodeCommentExtraField =
            // Version
            decToHex(1, 1) +
            // CommentCRC32
            decToHex(this.crc32(encodedComment), 4) +
            // UnicodeName
            utfEncodedComment;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x63" +
            // size
            decToHex(unicodeCommentExtraField.length, 2) +
            // content
            unicodeCommentExtraField;
    }

    var header = "";

    // version needed to extract
    header += "\x0A\x00";
    // general purpose bit flag
    // set bit 11 if utf8
    header += !useCustomEncoding &amp;&amp; (useUTF8ForFileName || useUTF8ForComment) ? "\x00\x08" : "\x00\x00";
    // compression method
    header += compressedObject.compressionMethod;
    // last mod file time
    header += decToHex(dosTime, 2);
    // last mod file date
    header += decToHex(dosDate, 2);
    // crc-32
    header += decToHex(compressedObject.crc32, 4);
    // compressed size
    header += decToHex(compressedObject.compressedSize, 4);
    // uncompressed size
    header += decToHex(compressedObject.uncompressedSize, 4);
    // file name length
    header += decToHex(encodedFileName.length, 2);
    // extra field length
    header += decToHex(extraFields.length, 2);


    var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;

    var dirRecord = signature.CENTRAL_FILE_HEADER +
    // version made by (00: DOS)
    decToHex(versionMadeBy, 2) +
    // file header (common to file and central directory)
    header +
    // file comment length
    decToHex(encodedComment.length, 2) +
    // disk number start
    "\x00\x00" +
    // internal file attributes TODO
    "\x00\x00" +
    // external file attributes
    decToHex(extFileAttr, 4) +
    // relative offset of local header
    decToHex(offset, 4) +
    // file name
    encodedFileName +
    // extra field
    extraFields +
    // file comment
    encodedComment;

    return {
        fileRecord: fileRecord,
        dirRecord: dirRecord,
        compressedObject: compressedObject
    };
};


// return the actual prototype of JSZip
var out = {
    /**
     * Read an existing zip and merge the data in the current JSZip object.
     * The implementation is in jszip-load.js, don't forget to include it.
     * @param {String|ArrayBuffer|Uint8Array|Buffer} stream  The stream to load
     * @param {Object} options Options for loading the stream.
     *  options.base64 : is the stream in base64 ? default : false
     * @return {JSZip} the current JSZip object
     */
    load: function(stream, options) {
        throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
    },

    /**
     * Filter nested files/folders with the specified function.
     * @param {Function} search the predicate to use :
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     * @return {Array} An array of matching elements.
     */
    filter: function(search) {
        var result = [],
            filename, relativePath, file, fileClone;
        for (filename in this.files) {
            if (!this.files.hasOwnProperty(filename)) {
                continue;
            }
            file = this.files[filename];
            // return a new object, don't let the user mess with our internal objects :)
            fileClone = new ZipObject(file.name, file._data, utils.extend(file.options));
            relativePath = filename.slice(this.root.length, filename.length);
            if (filename.slice(0, this.root.length) === this.root &amp;&amp; // the file is in the current root
            search(relativePath, fileClone)) { // and the file matches the function
                result.push(fileClone);
            }
        }
        return result;
    },

    /**
     * Add a file to the zip file, or search a file.
     * @param   {string|RegExp} name The name of the file to add (if data is defined),
     * the name of the file to find (if no data) or a regex to match files.
     * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
     * @param   {Object} o     File options
     * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
     * a file (when searching by string) or an array of files (when searching by regex).
     */
    file: function(name, data, o) {
        if (arguments.length === 1) {
            if (utils.isRegExp(name)) {
                var regexp = name;
                return this.filter(function(relativePath, file) {
                    return !file.dir &amp;&amp; regexp.test(relativePath);
                });
            }
            else { // text
                return this.filter(function(relativePath, file) {
                    return !file.dir &amp;&amp; relativePath === name;
                })[0] || null;
            }
        }
        else { // more than one argument : we have data !
            name = this.root + name;
            fileAdd.call(this, name, data, o);
        }
        return this;
    },

    /**
     * Add a directory to the zip file, or search.
     * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
     * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
     */
    folder: function(arg) {
        if (!arg) {
            return this;
        }

        if (utils.isRegExp(arg)) {
            return this.filter(function(relativePath, file) {
                return file.dir &amp;&amp; arg.test(relativePath);
            });
        }

        // else, name is a new folder
        var name = this.root + arg;
        var newFolder = folderAdd.call(this, name);

        // Allow chaining by returning a new object with this folder as the root
        var ret = this.clone();
        ret.root = newFolder.name;
        return ret;
    },

    /**
     * Delete a file, or a directory and all sub-files, from the zip
     * @param {string} name the name of the file to delete
     * @return {JSZip} this JSZip object
     */
    remove: function(name) {
        name = this.root + name;
        var file = this.files[name];
        if (!file) {
            // Look for any folders
            if (name.slice(-1) != "/") {
                name += "/";
            }
            file = this.files[name];
        }

        if (file &amp;&amp; !file.dir) {
            // file
            delete this.files[name];
        } else {
            // maybe a folder, delete recursively
            var kids = this.filter(function(relativePath, file) {
                return file.name.slice(0, name.length) === name;
            });
            for (var i = 0; i &lt; kids.length; i++) {
                delete this.files[kids[i].name];
            }
        }

        return this;
    },

    /**
     * Generate the complete zip file
     * @param {Object} options the options to generate the zip file :
     * - base64, (deprecated, use type instead) true to generate base64.
     * - compression, "STORE" by default.
     * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
     * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the zip file
     */
    generate: function(options) {
        options = utils.extend(options || {}, {
            base64: true,
            compression: "STORE",
            compressionOptions : null,
            type: "base64",
            platform: "DOS",
            comment: null,
            mimeType: 'application/zip',
            encodeFileName: utf8.utf8encode
        });

        utils.checkSupport(options.type);

        // accept nodejs `process.platform`
        if(
          options.platform === 'darwin' ||
          options.platform === 'freebsd' ||
          options.platform === 'linux' ||
          options.platform === 'sunos'
        ) {
          options.platform = "UNIX";
        }
        if (options.platform === 'win32') {
          options.platform = "DOS";
        }

        var zipData = [],
            localDirLength = 0,
            centralDirLength = 0,
            writer, i,
            encodedComment = utils.transformTo("string", options.encodeFileName(options.comment || this.comment || ""));

        // first, generate all the zip parts.
        for (var name in this.files) {
            if (!this.files.hasOwnProperty(name)) {
                continue;
            }
            var file = this.files[name];

            var compressionName = file.options.compression || options.compression.toUpperCase();
            var compression = compressions[compressionName];
            if (!compression) {
                throw new Error(compressionName + " is not a valid compression method !");
            }
            var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};

            var compressedObject = generateCompressedObjectFrom.call(this, file, compression, compressionOptions);

            var zipPart = generateZipParts.call(this, name, file, compressedObject, localDirLength, options.platform, options.encodeFileName);
            localDirLength += zipPart.fileRecord.length + compressedObject.compressedSize;
            centralDirLength += zipPart.dirRecord.length;
            zipData.push(zipPart);
        }

        var dirEnd = "";

        // end of central dir signature
        dirEnd = signature.CENTRAL_DIRECTORY_END +
        // number of this disk
        "\x00\x00" +
        // number of the disk with the start of the central directory
        "\x00\x00" +
        // total number of entries in the central directory on this disk
        decToHex(zipData.length, 2) +
        // total number of entries in the central directory
        decToHex(zipData.length, 2) +
        // size of the central directory   4 bytes
        decToHex(centralDirLength, 4) +
        // offset of start of central directory with respect to the starting disk number
        decToHex(localDirLength, 4) +
        // .ZIP file comment length
        decToHex(encodedComment.length, 2) +
        // .ZIP file comment
        encodedComment;


        // we have all the parts (and the total length)
        // time to create a writer !
        var typeName = options.type.toLowerCase();
        if(typeName==="uint8array"||typeName==="arraybuffer"||typeName==="blob"||typeName==="nodebuffer") {
            writer = new Uint8ArrayWriter(localDirLength + centralDirLength + dirEnd.length);
        }else{
            writer = new StringWriter(localDirLength + centralDirLength + dirEnd.length);
        }

        for (i = 0; i &lt; zipData.length; i++) {
            writer.append(zipData[i].fileRecord);
            writer.append(zipData[i].compressedObject.compressedContent);
        }
        for (i = 0; i &lt; zipData.length; i++) {
            writer.append(zipData[i].dirRecord);
        }

        writer.append(dirEnd);

        var zip = writer.finalize();



        switch(options.type.toLowerCase()) {
            // case "zip is an Uint8Array"
            case "uint8array" :
            case "arraybuffer" :
            case "nodebuffer" :
               return utils.transformTo(options.type.toLowerCase(), zip);
            case "blob" :
               return utils.arrayBuffer2Blob(utils.transformTo("arraybuffer", zip), options.mimeType);
            // case "zip is a string"
            case "base64" :
               return (options.base64) ? base64.encode(zip) : zip;
            default : // case "string" :
               return zip;
         }

    },

    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    crc32: function (input, crc) {
        return crc32(input, crc);
    },

    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    utf8encode: function (string) {
        return utils.transformTo("string", utf8.utf8encode(string));
    },

    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    utf8decode: function (input) {
        return utf8.utf8decode(input);
    }
};
module.exports = out;

},{"./base64":6,"./compressedObject":7,"./compressions":8,"./crc32":9,"./defaults":11,"./nodeBuffer":16,"./signature":19,"./stringWriter":21,"./support":22,"./uint8ArrayWriter":24,"./utf8":25,"./utils":26}],19:[function(_dereq_,module,exports){
'use strict';
exports.LOCAL_FILE_HEADER = "PK\x03\x04";
exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
exports.DATA_DESCRIPTOR = "PK\x07\x08";

},{}],20:[function(_dereq_,module,exports){
'use strict';
var DataReader = _dereq_('./dataReader');
var utils = _dereq_('./utils');

function StringReader(data, optimizedBinaryString) {
    this.data = data;
    if (!optimizedBinaryString) {
        this.data = utils.string2binary(this.data);
    }
    this.length = this.data.length;
    this.index = 0;
    this.zero = 0;
}
StringReader.prototype = new DataReader();
/**
 * @see DataReader.byteAt
 */
StringReader.prototype.byteAt = function(i) {
    return this.data.charCodeAt(this.zero + i);
};
/**
 * @see DataReader.lastIndexOfSignature
 */
StringReader.prototype.lastIndexOfSignature = function(sig) {
    return this.data.lastIndexOf(sig) - this.zero;
};
/**
 * @see DataReader.readData
 */
StringReader.prototype.readData = function(size) {
    this.checkOffset(size);
    // this will work because the constructor applied the "&amp; 0xff" mask.
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = StringReader;

},{"./dataReader":10,"./utils":26}],21:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./utils');

/**
 * An object to write any content to a string.
 * @constructor
 */
var StringWriter = function() {
    this.data = [];
};
StringWriter.prototype = {
    /**
     * Append any content to the current string.
     * @param {Object} input the content to add.
     */
    append: function(input) {
        input = utils.transformTo("string", input);
        this.data.push(input);
    },
    /**
     * Finalize the construction an return the result.
     * @return {string} the generated string.
     */
    finalize: function() {
        return this.data.join("");
    }
};

module.exports = StringWriter;

},{"./utils":26}],22:[function(_dereq_,module,exports){
(function (Buffer){
'use strict';
exports.base64 = true;
exports.array = true;
exports.string = true;
exports.arraybuffer = typeof ArrayBuffer !== "undefined" &amp;&amp; typeof Uint8Array !== "undefined";
// contains true if JSZip can read/generate nodejs Buffer, false otherwise.
// Browserify will provide a Buffer implementation for browsers, which is
// an augmented Uint8Array (i.e., can be used as either Buffer or U8).
exports.nodebuffer = typeof Buffer !== "undefined";
// contains true if JSZip can read/generate Uint8Array, false otherwise.
exports.uint8array = typeof Uint8Array !== "undefined";

if (typeof ArrayBuffer === "undefined") {
    exports.blob = false;
}
else {
    var buffer = new ArrayBuffer(0);
    try {
        exports.blob = new Blob([buffer], {
            type: "application/zip"
        }).size === 0;
    }
    catch (e) {
        try {
            var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            var builder = new Builder();
            builder.append(buffer);
            exports.blob = builder.getBlob('application/zip').size === 0;
        }
        catch (e) {
            exports.blob = false;
        }
    }
}

}).call(this,_dereq_("buffer").Buffer)
},{"buffer":1}],23:[function(_dereq_,module,exports){
'use strict';
var ArrayReader = _dereq_('./arrayReader');

function Uint8ArrayReader(data) {
    if (data) {
        this.data = data;
        this.length = this.data.length;
        this.index = 0;
        this.zero = 0;
    }
}
Uint8ArrayReader.prototype = new ArrayReader();
/**
 * @see DataReader.readData
 */
Uint8ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
        return new Uint8Array(0);
    }
    var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = Uint8ArrayReader;

},{"./arrayReader":5}],24:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./utils');

/**
 * An object to write any content to an Uint8Array.
 * @constructor
 * @param {number} length The length of the array.
 */
var Uint8ArrayWriter = function(length) {
    this.data = new Uint8Array(length);
    this.index = 0;
};
Uint8ArrayWriter.prototype = {
    /**
     * Append any content to the current array.
     * @param {Object} input the content to add.
     */
    append: function(input) {
        if (input.length !== 0) {
            // with an empty Uint8Array, Opera fails with a "Offset larger than array size"
            input = utils.transformTo("uint8array", input);
            this.data.set(input, this.index);
            this.index += input.length;
        }
    },
    /**
     * Finalize the construction an return the result.
     * @return {Uint8Array} the generated array.
     */
    finalize: function() {
        return this.data;
    }
};

module.exports = Uint8ArrayWriter;

},{"./utils":26}],25:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./utils');
var support = _dereq_('./support');
var nodeBuffer = _dereq_('./nodeBuffer');

/**
 * The following functions come from pako, from pako/lib/utils/strings
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */

// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 &amp; 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new Array(256);
for (var i=0; i&lt;256; i++) {
  _utf8len[i] = (i &gt;= 252 ? 6 : i &gt;= 248 ? 5 : i &gt;= 240 ? 4 : i &gt;= 224 ? 3 : i &gt;= 192 ? 2 : 1);
}
_utf8len[254]=_utf8len[254]=1; // Invalid sequence start

// convert string to array (typed, when possible)
var string2buf = function (str) {
    var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

    // count binary size
    for (m_pos = 0; m_pos &lt; str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c &amp; 0xfc00) === 0xd800 &amp;&amp; (m_pos+1 &lt; str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 &amp; 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) &lt;&lt; 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        buf_len += c &lt; 0x80 ? 1 : c &lt; 0x800 ? 2 : c &lt; 0x10000 ? 3 : 4;
    }

    // allocate buffer
    if (support.uint8array) {
        buf = new Uint8Array(buf_len);
    } else {
        buf = new Array(buf_len);
    }

    // convert
    for (i=0, m_pos = 0; i &lt; buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c &amp; 0xfc00) === 0xd800 &amp;&amp; (m_pos+1 &lt; str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 &amp; 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) &lt;&lt; 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        if (c &lt; 0x80) {
            /* one byte */
            buf[i++] = c;
        } else if (c &lt; 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | (c &gt;&gt;&gt; 6);
            buf[i++] = 0x80 | (c &amp; 0x3f);
        } else if (c &lt; 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | (c &gt;&gt;&gt; 12);
            buf[i++] = 0x80 | (c &gt;&gt;&gt; 6 &amp; 0x3f);
            buf[i++] = 0x80 | (c &amp; 0x3f);
        } else {
            /* four bytes */
            buf[i++] = 0xf0 | (c &gt;&gt;&gt; 18);
            buf[i++] = 0x80 | (c &gt;&gt;&gt; 12 &amp; 0x3f);
            buf[i++] = 0x80 | (c &gt;&gt;&gt; 6 &amp; 0x3f);
            buf[i++] = 0x80 | (c &amp; 0x3f);
        }
    }

    return buf;
};

// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = function(buf, max) {
    var pos;

    max = max || buf.length;
    if (max &gt; buf.length) { max = buf.length; }

    // go back from last position, until start of sequence found
    pos = max-1;
    while (pos &gt;= 0 &amp;&amp; (buf[pos] &amp; 0xC0) === 0x80) { pos--; }

    // Fuckup - very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos &lt; 0) { return max; }

    // If we came to start of buffer - that means vuffer is too small,
    // return max too.
    if (pos === 0) { return max; }

    return (pos + _utf8len[buf[pos]] &gt; max) ? pos : max;
};

// convert array to string
var buf2string = function (buf) {
    var str, i, out, c, c_len;
    var len = buf.length;

    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    var utf16buf = new Array(len*2);

    for (out=0, i=0; i&lt;len;) {
        c = buf[i++];
        // quick process ascii
        if (c &lt; 0x80) { utf16buf[out++] = c; continue; }

        c_len = _utf8len[c];
        // skip 5 &amp; 6 byte codes
        if (c_len &gt; 4) { utf16buf[out++] = 0xfffd; i += c_len-1; continue; }

        // apply mask on first byte
        c &amp;= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while (c_len &gt; 1 &amp;&amp; i &lt; len) {
            c = (c &lt;&lt; 6) | (buf[i++] &amp; 0x3f);
            c_len--;
        }

        // terminated by end of string?
        if (c_len &gt; 1) { utf16buf[out++] = 0xfffd; continue; }

        if (c &lt; 0x10000) {
            utf16buf[out++] = c;
        } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | ((c &gt;&gt; 10) &amp; 0x3ff);
            utf16buf[out++] = 0xdc00 | (c &amp; 0x3ff);
        }
    }

    // shrinkBuf(utf16buf, out)
    if (utf16buf.length !== out) {
        if(utf16buf.subarray) {
            utf16buf = utf16buf.subarray(0, out);
        } else {
            utf16buf.length = out;
        }
    }

    // return String.fromCharCode.apply(null, utf16buf);
    return utils.applyFromCharCode(utf16buf);
};


// That's all for the pako functions.


/**
 * Transform a javascript string into an array (typed if possible) of bytes,
 * UTF-8 encoded.
 * @param {String} str the string to encode
 * @return {Array|Uint8Array|Buffer} the UTF-8 encoded string.
 */
exports.utf8encode = function utf8encode(str) {
    if (support.nodebuffer) {
        return nodeBuffer(str, "utf-8");
    }

    return string2buf(str);
};


/**
 * Transform a bytes array (or a representation) representing an UTF-8 encoded
 * string into a javascript string.
 * @param {Array|Uint8Array|Buffer} buf the data de decode
 * @return {String} the decoded string.
 */
exports.utf8decode = function utf8decode(buf) {
    if (support.nodebuffer) {
        return utils.transformTo("nodebuffer", buf).toString("utf-8");
    }

    buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);

    // return buf2string(buf);
    // Chrome prefers to work with "small" chunks of data
    // for the method buf2string.
    // Firefox and Chrome has their own shortcut, IE doesn't seem to really care.
    var result = [], k = 0, len = buf.length, chunk = 65536;
    while (k &lt; len) {
        var nextBoundary = utf8border(buf, Math.min(k + chunk, len));
        if (support.uint8array) {
            result.push(buf2string(buf.subarray(k, nextBoundary)));
        } else {
            result.push(buf2string(buf.slice(k, nextBoundary)));
        }
        k = nextBoundary;
    }
    return result.join("");

};
// vim: set shiftwidth=4 softtabstop=4:

},{"./nodeBuffer":16,"./support":22,"./utils":26}],26:[function(_dereq_,module,exports){
'use strict';
var support = _dereq_('./support');
var compressions = _dereq_('./compressions');
var nodeBuffer = _dereq_('./nodeBuffer');
/**
 * Convert a string to a "binary string" : a string containing only char codes between 0 and 255.
 * @param {string} str the string to transform.
 * @return {String} the binary string.
 */
exports.string2binary = function(str) {
    var result = "";
    for (var i = 0; i &lt; str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) &amp; 0xff);
    }
    return result;
};
exports.arrayBuffer2Blob = function(buffer, mimeType) {
    exports.checkSupport("blob");
	mimeType = mimeType || 'application/zip';

    try {
        // Blob constructor
        return new Blob([buffer], {
            type: mimeType
        });
    }
    catch (e) {

        try {
            // deprecated, browser only, old way
            var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            var builder = new Builder();
            builder.append(buffer);
            return builder.getBlob(mimeType);
        }
        catch (e) {

            // well, fuck ?!
            throw new Error("Bug : can't construct the Blob.");
        }
    }


};
/**
 * The identity function.
 * @param {Object} input the input.
 * @return {Object} the same input.
 */
function identity(input) {
    return input;
}

/**
 * Fill in an array with a string.
 * @param {String} str the string to use.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to fill in (will be mutated).
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated array.
 */
function stringToArrayLike(str, array) {
    for (var i = 0; i &lt; str.length; ++i) {
        array[i] = str.charCodeAt(i) &amp; 0xFF;
    }
    return array;
}

/**
 * Transform an array-like object to a string.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
 * @return {String} the result.
 */
function arrayLikeToString(array) {
    // Performances notes :
    // --------------------
    // String.fromCharCode.apply(null, array) is the fastest, see
    // see http://jsperf.com/converting-a-uint8array-to-a-string/2
    // but the stack is limited (and we can get huge arrays !).
    //
    // result += String.fromCharCode(array[i]); generate too many strings !
    //
    // This code is inspired by http://jsperf.com/arraybuffer-to-string-apply-performance/2
    var chunk = 65536;
    var result = [],
        len = array.length,
        type = exports.getTypeOf(array),
        k = 0,
        canUseApply = true;
      try {
         switch(type) {
            case "uint8array":
               String.fromCharCode.apply(null, new Uint8Array(0));
               break;
            case "nodebuffer":
               String.fromCharCode.apply(null, nodeBuffer(0));
               break;
         }
      } catch(e) {
         canUseApply = false;
      }

      // no apply : slow and painful algorithm
      // default browser on android 4.*
      if (!canUseApply) {
         var resultStr = "";
         for(var i = 0; i &lt; array.length;i++) {
            resultStr += String.fromCharCode(array[i]);
         }
    return resultStr;
    }
    while (k &lt; len &amp;&amp; chunk &gt; 1) {
        try {
            if (type === "array" || type === "nodebuffer") {
                result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
            }
            else {
                result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
            }
            k += chunk;
        }
        catch (e) {
            chunk = Math.floor(chunk / 2);
        }
    }
    return result.join("");
}

exports.applyFromCharCode = arrayLikeToString;


/**
 * Copy the data from an array-like to an other array-like.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayFrom the origin array.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayTo the destination array which will be mutated.
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated destination array.
 */
function arrayLikeToArrayLike(arrayFrom, arrayTo) {
    for (var i = 0; i &lt; arrayFrom.length; i++) {
        arrayTo[i] = arrayFrom[i];
    }
    return arrayTo;
}

// a matrix containing functions to transform everything into everything.
var transform = {};

// string to ?
transform["string"] = {
    "string": identity,
    "array": function(input) {
        return stringToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["string"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return stringToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": function(input) {
        return stringToArrayLike(input, nodeBuffer(input.length));
    }
};

// array to ?
transform["array"] = {
    "string": arrayLikeToString,
    "array": identity,
    "arraybuffer": function(input) {
        return (new Uint8Array(input)).buffer;
    },
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodeBuffer(input);
    }
};

// arraybuffer to ?
transform["arraybuffer"] = {
    "string": function(input) {
        return arrayLikeToString(new Uint8Array(input));
    },
    "array": function(input) {
        return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
    },
    "arraybuffer": identity,
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodeBuffer(new Uint8Array(input));
    }
};

// uint8array to ?
transform["uint8array"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return input.buffer;
    },
    "uint8array": identity,
    "nodebuffer": function(input) {
        return nodeBuffer(input);
    }
};

// nodebuffer to ?
transform["nodebuffer"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["nodebuffer"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return arrayLikeToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": identity
};

/**
 * Transform an input into any type.
 * The supported output type are : string, array, uint8array, arraybuffer, nodebuffer.
 * If no output type is specified, the unmodified input will be returned.
 * @param {String} outputType the output type.
 * @param {String|Array|ArrayBuffer|Uint8Array|Buffer} input the input to convert.
 * @throws {Error} an Error if the browser doesn't support the requested output type.
 */
exports.transformTo = function(outputType, input) {
    if (!input) {
        // undefined, null, etc
        // an empty string won't harm.
        input = "";
    }
    if (!outputType) {
        return input;
    }
    exports.checkSupport(outputType);
    var inputType = exports.getTypeOf(input);
    var result = transform[inputType][outputType](input);
    return result;
};

/**
 * Return the type of the input.
 * The type will be in a format valid for JSZip.utils.transformTo : string, array, uint8array, arraybuffer.
 * @param {Object} input the input to identify.
 * @return {String} the (lowercase) type of the input.
 */
exports.getTypeOf = function(input) {
    if (typeof input === "string") {
        return "string";
    }
    if (Object.prototype.toString.call(input) === "[object Array]") {
        return "array";
    }
    if (support.nodebuffer &amp;&amp; nodeBuffer.test(input)) {
        return "nodebuffer";
    }
    if (support.uint8array &amp;&amp; input instanceof Uint8Array) {
        return "uint8array";
    }
    if (support.arraybuffer &amp;&amp; input instanceof ArrayBuffer) {
        return "arraybuffer";
    }
};

/**
 * Throw an exception if the type is not supported.
 * @param {String} type the type to check.
 * @throws {Error} an Error if the browser doesn't support the requested type.
 */
exports.checkSupport = function(type) {
    var supported = support[type.toLowerCase()];
    if (!supported) {
        throw new Error(type + " is not supported by this browser");
    }
};
exports.MAX_VALUE_16BITS = 65535;
exports.MAX_VALUE_32BITS = -1; // well, "\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF" is parsed as -1

/**
 * Prettify a string read as binary.
 * @param {string} str the string to prettify.
 * @return {string} a pretty string.
 */
exports.pretty = function(str) {
    var res = '',
        code, i;
    for (i = 0; i &lt; (str || "").length; i++) {
        code = str.charCodeAt(i);
        res += '\\x' + (code &lt; 16 ? "0" : "") + code.toString(16).toUpperCase();
    }
    return res;
};

/**
 * Find a compression registered in JSZip.
 * @param {string} compressionMethod the method magic to find.
 * @return {Object|null} the JSZip compression object, null if none found.
 */
exports.findCompression = function(compressionMethod) {
    for (var method in compressions) {
        if (!compressions.hasOwnProperty(method)) {
            continue;
        }
        if (compressions[method].magic === compressionMethod) {
            return compressions[method];
        }
    }
    return null;
};
/**
* Cross-window, cross-Node-context regular expression detection
* @param  {Object}  object Anything
* @return {Boolean}        true if the object is a regular expression,
* false otherwise
*/
exports.isRegExp = function (object) {
    return Object.prototype.toString.call(object) === "[object RegExp]";
};

/**
 * Merge the objects passed as parameters into a new one.
 * @private
 * @param {...Object} var_args All objects to merge.
 * @return {Object} a new object with the data of the others.
 */
exports.extend = function() {
    var result = {}, i, attr;
    for (i = 0; i &lt; arguments.length; i++) { // arguments is not enumerable in some browsers
        for (attr in arguments[i]) {
            if (arguments[i].hasOwnProperty(attr) &amp;&amp; typeof result[attr] === "undefined") {
                result[attr] = arguments[i][attr];
            }
        }
    }
    return result;
};


},{"./compressions":8,"./nodeBuffer":16,"./support":22}],27:[function(_dereq_,module,exports){
'use strict';
var StringReader = _dereq_('./stringReader');
var NodeBufferReader = _dereq_('./nodeBufferReader');
var Uint8ArrayReader = _dereq_('./uint8ArrayReader');
var ArrayReader = _dereq_('./arrayReader');
var utils = _dereq_('./utils');
var sig = _dereq_('./signature');
var ZipEntry = _dereq_('./zipEntry');
var support = _dereq_('./support');
var jszipProto = _dereq_('./object');
//  class ZipEntries {{{
/**
 * All the entries in the zip file.
 * @constructor
 * @param {String|ArrayBuffer|Uint8Array} data the binary stream to load.
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntries(data, loadOptions) {
    this.files = [];
    this.loadOptions = loadOptions;
    if (data) {
        this.load(data);
    }
}
ZipEntries.prototype = {
    /**
     * Check that the reader is on the speficied signature.
     * @param {string} expectedSignature the expected signature.
     * @throws {Error} if it is an other signature.
     */
    checkSignature: function(expectedSignature) {
        var signature = this.reader.readString(4);
        if (signature !== expectedSignature) {
            throw new Error("Corrupted zip or bug : unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
        }
    },
    /**
     * Check if the given signature is at the given index.
     * @param {number} askedIndex the index to check.
     * @param {string} expectedSignature the signature to expect.
     * @return {boolean} true if the signature is here, false otherwise.
     */
    isSignature: function(askedIndex, expectedSignature) {
        var currentIndex = this.reader.index;
        this.reader.setIndex(askedIndex);
        var signature = this.reader.readString(4);
        var result = signature === expectedSignature;
        this.reader.setIndex(currentIndex);
        return result;
    },
    /**
     * Read the end of the central directory.
     */
    readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2);
        this.diskWithCentralDirStart = this.reader.readInt(2);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
        this.centralDirRecords = this.reader.readInt(2);
        this.centralDirSize = this.reader.readInt(4);
        this.centralDirOffset = this.reader.readInt(4);

        this.zipCommentLength = this.reader.readInt(2);
        // warning : the encoding depends of the system locale
        // On a linux machine with LANG=en_US.utf8, this field is utf8 encoded.
        // On a windows machine, this field is encoded with the localized windows code page.
        var zipComment = this.reader.readData(this.zipCommentLength);
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        // To get consistent behavior with the generation part, we will assume that
        // this is utf8 encoded unless specified otherwise.
        var decodeContent = utils.transformTo(decodeParamType, zipComment);
        this.zipComment = this.loadOptions.decodeFileName(decodeContent);
    },
    /**
     * Read the end of the Zip 64 central directory.
     * Not merged with the method readEndOfCentral :
     * The end of central can coexist with its Zip64 brother,
     * I don't want to read the wrong number of bytes !
     */
    readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8);
        this.versionMadeBy = this.reader.readString(2);
        this.versionNeeded = this.reader.readInt(2);
        this.diskNumber = this.reader.readInt(4);
        this.diskWithCentralDirStart = this.reader.readInt(4);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
        this.centralDirRecords = this.reader.readInt(8);
        this.centralDirSize = this.reader.readInt(8);
        this.centralDirOffset = this.reader.readInt(8);

        this.zip64ExtensibleData = {};
        var extraDataSize = this.zip64EndOfCentralSize - 44,
            index = 0,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;
        while (index &lt; extraDataSize) {
            extraFieldId = this.reader.readInt(2);
            extraFieldLength = this.reader.readInt(4);
            extraFieldValue = this.reader.readString(extraFieldLength);
            this.zip64ExtensibleData[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }
    },
    /**
     * Read the end of the Zip 64 central directory locator.
     */
    readBlockZip64EndOfCentralLocator: function() {
        this.diskWithZip64CentralDirStart = this.reader.readInt(4);
        this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
        this.disksCount = this.reader.readInt(4);
        if (this.disksCount &gt; 1) {
            throw new Error("Multi-volumes zip are not supported");
        }
    },
    /**
     * Read the local files, based on the offset read in the central part.
     */
    readLocalFiles: function() {
        var i, file;
        for (i = 0; i &lt; this.files.length; i++) {
            file = this.files[i];
            this.reader.setIndex(file.localHeaderOffset);
            this.checkSignature(sig.LOCAL_FILE_HEADER);
            file.readLocalPart(this.reader);
            file.handleUTF8();
            file.processAttributes();
        }
    },
    /**
     * Read the central directory.
     */
    readCentralDir: function() {
        var file;

        this.reader.setIndex(this.centralDirOffset);
        while (this.reader.readString(4) === sig.CENTRAL_FILE_HEADER) {
            file = new ZipEntry({
                zip64: this.zip64
            }, this.loadOptions);
            file.readCentralPart(this.reader);
            this.files.push(file);
        }

        if (this.centralDirRecords !== this.files.length) {
            if (this.centralDirRecords !== 0 &amp;&amp; this.files.length === 0) {
                // We expected some records but couldn't find ANY.
                // This is really suspicious, as if something went wrong.
                throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
            } else {
                // We found some records but not all.
                // Something is wrong but we got something for the user: no error here.
                // console.warn("expected", this.centralDirRecords, "records in central dir, got", this.files.length);
            }
        }
    },
    /**
     * Read the end of central directory.
     */
    readEndOfCentral: function() {
        var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
        if (offset &lt; 0) {
            // Check if the content is a truncated zip or complete garbage.
            // A "LOCAL_FILE_HEADER" is not required at the beginning (auto
            // extractible zip for example) but it can give a good hint.
            // If an ajax request was used without responseType, we will also
            // get unreadable data.
            var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);

            if (isGarbage) {
                throw new Error("Can't find end of central directory : is this a zip file ? " +
                                "If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html");
            } else {
                throw new Error("Corrupted zip : can't find end of central directory");
            }
        }
        this.reader.setIndex(offset);
        var endOfCentralDirOffset = offset;
        this.checkSignature(sig.CENTRAL_DIRECTORY_END);
        this.readBlockEndOfCentral();


        /* extract from the zip spec :
            4)  If one of the fields in the end of central directory
                record is too small to hold required data, the field
                should be set to -1 (0xFFFF or 0xFFFFFFFF) and the
                ZIP64 format record should be created.
            5)  The end of central directory record and the
                Zip64 end of central directory locator record must
                reside on the same disk when splitting or spanning
                an archive.
         */
        if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
            this.zip64 = true;

            /*
            Warning : the zip64 extension is supported, but ONLY if the 64bits integer read from
            the zip file can fit into a 32bits integer. This cannot be solved : Javascript represents
            all numbers as 64-bit double precision IEEE 754 floating point numbers.
            So, we have 53bits for integers and bitwise operations treat everything as 32bits.
            see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators
            and http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf section 8.5
            */

            // should look for a zip64 EOCD locator
            offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            if (offset &lt; 0) {
                throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
            }
            this.reader.setIndex(offset);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            this.readBlockZip64EndOfCentralLocator();

            // now the zip64 EOCD record
            if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
                // console.warn("ZIP64 end of central directory not where expected.");
                this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
                if (this.relativeOffsetEndOfZip64CentralDir &lt; 0) {
                    throw new Error("Corrupted zip : can't find the ZIP64 end of central directory");
                }
            }
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
            this.readBlockZip64EndOfCentral();
        }

        var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;
        if (this.zip64) {
            expectedEndOfCentralDirOffset += 20; // end of central dir 64 locator
            expectedEndOfCentralDirOffset += 12 /* should not include the leading 12 bytes */ + this.zip64EndOfCentralSize;
        }

        var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;

        if (extraBytes &gt; 0) {
            // console.warn(extraBytes, "extra bytes at beginning or within zipfile");
            if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {
                // The offsets seem wrong, but we have something at the specified offset.
                // So… we keep it.
            } else {
                // the offset is wrong, update the "zero" of the reader
                // this happens if data has been prepended (crx files for example)
                this.reader.zero = extraBytes;
            }
        } else if (extraBytes &lt; 0) {
            throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
        }
    },
    prepareReader: function(data) {
        var type = utils.getTypeOf(data);
        utils.checkSupport(type);
        if (type === "string" &amp;&amp; !support.uint8array) {
            this.reader = new StringReader(data, this.loadOptions.optimizedBinaryString);
        }
        else if (type === "nodebuffer") {
            this.reader = new NodeBufferReader(data);
        }
        else if (support.uint8array) {
            this.reader = new Uint8ArrayReader(utils.transformTo("uint8array", data));
        } else if (support.array) {
            this.reader = new ArrayReader(utils.transformTo("array", data));
        } else {
            throw new Error("Unexpected error: unsupported type '" + type + "'");
        }
    },
    /**
     * Read a zip file and create ZipEntries.
     * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
     */
    load: function(data) {
        this.prepareReader(data);
        this.readEndOfCentral();
        this.readCentralDir();
        this.readLocalFiles();
    }
};
// }}} end of ZipEntries
module.exports = ZipEntries;

},{"./arrayReader":5,"./nodeBufferReader":17,"./object":18,"./signature":19,"./stringReader":20,"./support":22,"./uint8ArrayReader":23,"./utils":26,"./zipEntry":28}],28:[function(_dereq_,module,exports){
'use strict';
var StringReader = _dereq_('./stringReader');
var utils = _dereq_('./utils');
var CompressedObject = _dereq_('./compressedObject');
var jszipProto = _dereq_('./object');
var support = _dereq_('./support');

var MADE_BY_DOS = 0x00;
var MADE_BY_UNIX = 0x03;

// class ZipEntry {{{
/**
 * An entry in the zip file.
 * @constructor
 * @param {Object} options Options of the current file.
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntry(options, loadOptions) {
    this.options = options;
    this.loadOptions = loadOptions;
}
ZipEntry.prototype = {
    /**
     * say if the file is encrypted.
     * @return {boolean} true if the file is encrypted, false otherwise.
     */
    isEncrypted: function() {
        // bit 1 is set
        return (this.bitFlag &amp; 0x0001) === 0x0001;
    },
    /**
     * say if the file has utf-8 filename/comment.
     * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
     */
    useUTF8: function() {
        // bit 11 is set
        return (this.bitFlag &amp; 0x0800) === 0x0800;
    },
    /**
     * Prepare the function used to generate the compressed content from this ZipFile.
     * @param {DataReader} reader the reader to use.
     * @param {number} from the offset from where we should read the data.
     * @param {number} length the length of the data to read.
     * @return {Function} the callback to get the compressed content (the type depends of the DataReader class).
     */
    prepareCompressedContent: function(reader, from, length) {
        return function() {
            var previousIndex = reader.index;
            reader.setIndex(from);
            var compressedFileData = reader.readData(length);
            reader.setIndex(previousIndex);

            return compressedFileData;
        };
    },
    /**
     * Prepare the function used to generate the uncompressed content from this ZipFile.
     * @param {DataReader} reader the reader to use.
     * @param {number} from the offset from where we should read the data.
     * @param {number} length the length of the data to read.
     * @param {JSZip.compression} compression the compression used on this file.
     * @param {number} uncompressedSize the uncompressed size to expect.
     * @return {Function} the callback to get the uncompressed content (the type depends of the DataReader class).
     */
    prepareContent: function(reader, from, length, compression, uncompressedSize) {
        return function() {

            var compressedFileData = utils.transformTo(compression.uncompressInputType, this.getCompressedContent());
            var uncompressedFileData = compression.uncompress(compressedFileData);

            if (uncompressedFileData.length !== uncompressedSize) {
                throw new Error("Bug : uncompressed data size mismatch");
            }

            return uncompressedFileData;
        };
    },
    /**
     * Read the local part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readLocalPart: function(reader) {
        var compression, localExtraFieldsLength;

        // we already know everything from the central dir !
        // If the central dir data are false, we are doomed.
        // On the bright side, the local part is scary  : zip64, data descriptors, both, etc.
        // The less data we get here, the more reliable this should be.
        // Let's skip the whole header and dash to the data !
        reader.skip(22);
        // in some zip created on windows, the filename stored in the central dir contains \ instead of /.
        // Strangely, the filename here is OK.
        // I would love to treat these zip files as corrupted (see http://www.info-zip.org/FAQ.html#backslashes
        // or APPNOTE#4.4.17.1, "All slashes MUST be forward slashes '/'") but there are a lot of bad zip generators...
        // Search "unzip mismatching "local" filename continuing with "central" filename version" on
        // the internet.
        //
        // I think I see the logic here : the central directory is used to display
        // content and the local directory is used to extract the files. Mixing / and \
        // may be used to display \ to windows users and use / when extracting the files.
        // Unfortunately, this lead also to some issues : http://seclists.org/fulldisclosure/2009/Sep/394
        this.fileNameLength = reader.readInt(2);
        localExtraFieldsLength = reader.readInt(2); // can't be sure this will be the same as the central dir
        this.fileName = reader.readData(this.fileNameLength);
        reader.skip(localExtraFieldsLength);

        if (this.compressedSize == -1 || this.uncompressedSize == -1) {
            throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize == -1 || uncompressedSize == -1)");
        }

        compression = utils.findCompression(this.compressionMethod);
        if (compression === null) { // no compression found
            throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " +  utils.transformTo("string", this.fileName) + ")");
        }
        this.decompressed = new CompressedObject();
        this.decompressed.compressedSize = this.compressedSize;
        this.decompressed.uncompressedSize = this.uncompressedSize;
        this.decompressed.crc32 = this.crc32;
        this.decompressed.compressionMethod = this.compressionMethod;
        this.decompressed.getCompressedContent = this.prepareCompressedContent(reader, reader.index, this.compressedSize, compression);
        this.decompressed.getContent = this.prepareContent(reader, reader.index, this.compressedSize, compression, this.uncompressedSize);

        // we need to compute the crc32...
        if (this.loadOptions.checkCRC32) {
            this.decompressed = utils.transformTo("string", this.decompressed.getContent());
            if (jszipProto.crc32(this.decompressed) !== this.crc32) {
                throw new Error("Corrupted zip : CRC32 mismatch");
            }
        }
    },

    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readCentralPart: function(reader) {
        this.versionMadeBy = reader.readInt(2);
        this.versionNeeded = reader.readInt(2);
        this.bitFlag = reader.readInt(2);
        this.compressionMethod = reader.readString(2);
        this.date = reader.readDate();
        this.crc32 = reader.readInt(4);
        this.compressedSize = reader.readInt(4);
        this.uncompressedSize = reader.readInt(4);
        this.fileNameLength = reader.readInt(2);
        this.extraFieldsLength = reader.readInt(2);
        this.fileCommentLength = reader.readInt(2);
        this.diskNumberStart = reader.readInt(2);
        this.internalFileAttributes = reader.readInt(2);
        this.externalFileAttributes = reader.readInt(4);
        this.localHeaderOffset = reader.readInt(4);

        if (this.isEncrypted()) {
            throw new Error("Encrypted zip are not supported");
        }

        this.fileName = reader.readData(this.fileNameLength);
        this.readExtraFields(reader);
        this.parseZIP64ExtraField(reader);
        this.fileComment = reader.readData(this.fileCommentLength);
    },

    /**
     * Parse the external file attributes and get the unix/dos permissions.
     */
    processAttributes: function () {
        this.unixPermissions = null;
        this.dosPermissions = null;
        var madeBy = this.versionMadeBy &gt;&gt; 8;

        // Check if we have the DOS directory flag set.
        // We look for it in the DOS and UNIX permissions
        // but some unknown platform could set it as a compatibility flag.
        this.dir = this.externalFileAttributes &amp; 0x0010 ? true : false;

        if(madeBy === MADE_BY_DOS) {
            // first 6 bits (0 to 5)
            this.dosPermissions = this.externalFileAttributes &amp; 0x3F;
        }

        if(madeBy === MADE_BY_UNIX) {
            this.unixPermissions = (this.externalFileAttributes &gt;&gt; 16) &amp; 0xFFFF;
            // the octal permissions are in (this.unixPermissions &amp; 0x01FF).toString(8);
        }

        // fail safe : if the name ends with a / it probably means a folder
        if (!this.dir &amp;&amp; this.fileNameStr.slice(-1) === '/') {
            this.dir = true;
        }
    },

    /**
     * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
     * @param {DataReader} reader the reader to use.
     */
    parseZIP64ExtraField: function(reader) {

        if (!this.extraFields[0x0001]) {
            return;
        }

        // should be something, preparing the extra reader
        var extraReader = new StringReader(this.extraFields[0x0001].value);

        // I really hope that these 64bits integer can fit in 32 bits integer, because js
        // won't let us have more.
        if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
            this.uncompressedSize = extraReader.readInt(8);
        }
        if (this.compressedSize === utils.MAX_VALUE_32BITS) {
            this.compressedSize = extraReader.readInt(8);
        }
        if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
            this.localHeaderOffset = extraReader.readInt(8);
        }
        if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
            this.diskNumberStart = extraReader.readInt(4);
        }
    },
    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readExtraFields: function(reader) {
        var start = reader.index,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;

        this.extraFields = this.extraFields || {};

        while (reader.index &lt; start + this.extraFieldsLength) {
            extraFieldId = reader.readInt(2);
            extraFieldLength = reader.readInt(2);
            extraFieldValue = reader.readString(extraFieldLength);

            this.extraFields[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }
    },
    /**
     * Apply an UTF8 transformation if needed.
     */
    handleUTF8: function() {
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) {
            this.fileNameStr = jszipProto.utf8decode(this.fileName);
            this.fileCommentStr = jszipProto.utf8decode(this.fileComment);
        } else {
            var upath = this.findExtraFieldUnicodePath();
            if (upath !== null) {
                this.fileNameStr = upath;
            } else {
                var fileNameByteArray =  utils.transformTo(decodeParamType, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
            }

            var ucomment = this.findExtraFieldUnicodeComment();
            if (ucomment !== null) {
                this.fileCommentStr = ucomment;
            } else {
                var commentByteArray =  utils.transformTo(decodeParamType, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
            }
        }
    },

    /**
     * Find the unicode path declared in the extra field, if any.
     * @return {String} the unicode path, null otherwise.
     */
    findExtraFieldUnicodePath: function() {
        var upathField = this.extraFields[0x7075];
        if (upathField) {
            var extraReader = new StringReader(upathField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the filename changed, this field is out of date.
            if (jszipProto.crc32(this.fileName) !== extraReader.readInt(4)) {
                return null;
            }

            return jszipProto.utf8decode(extraReader.readString(upathField.length - 5));
        }
        return null;
    },

    /**
     * Find the unicode comment declared in the extra field, if any.
     * @return {String} the unicode comment, null otherwise.
     */
    findExtraFieldUnicodeComment: function() {
        var ucommentField = this.extraFields[0x6375];
        if (ucommentField) {
            var extraReader = new StringReader(ucommentField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the comment changed, this field is out of date.
            if (jszipProto.crc32(this.fileComment) !== extraReader.readInt(4)) {
                return null;
            }

            return jszipProto.utf8decode(extraReader.readString(ucommentField.length - 5));
        }
        return null;
    }
};
module.exports = ZipEntry;

},{"./compressedObject":7,"./object":18,"./stringReader":20,"./support":22,"./utils":26}],29:[function(_dereq_,module,exports){
// Top level file is just a mixin of submodules &amp; constants
'use strict';

var assign    = _dereq_('./lib/utils/common').assign;

var deflate   = _dereq_('./lib/deflate');
var inflate   = _dereq_('./lib/inflate');
var constants = _dereq_('./lib/zlib/constants');

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;

},{"./lib/deflate":30,"./lib/inflate":31,"./lib/utils/common":32,"./lib/zlib/constants":35}],30:[function(_dereq_,module,exports){
'use strict';


var zlib_deflate = _dereq_('./zlib/deflate');
var utils        = _dereq_('./utils/common');
var strings      = _dereq_('./utils/strings');
var msg          = _dereq_('./zlib/messages');
var ZStream      = _dereq_('./zlib/zstream');

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -&gt; Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overriden.
 **/

/**
 * Deflate.result -&gt; Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Deflate.err -&gt; Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -&gt; String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -&gt; last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw &amp;&amp; (opt.windowBits &gt; 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip &amp;&amp; (opt.windowBits &gt; 0) &amp;&amp; (opt.windowBits &lt; 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -&gt; Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END &amp;&amp; status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 &amp;&amp; (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in &gt; 0 || strm.avail_out === 0) &amp;&amp; status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -&gt; Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -&gt; Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -&gt; Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -&gt; Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -&gt; Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;

},{"./utils/common":32,"./utils/strings":33,"./zlib/deflate":37,"./zlib/messages":42,"./zlib/zstream":44}],31:[function(_dereq_,module,exports){
'use strict';


var zlib_inflate = _dereq_('./zlib/inflate');
var utils        = _dereq_('./utils/common');
var strings      = _dereq_('./utils/strings');
var c            = _dereq_('./zlib/constants');
var msg          = _dereq_('./zlib/messages');
var ZStream      = _dereq_('./zlib/zstream');
var GZheader     = _dereq_('./zlib/gzheader');

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -&gt; Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overriden.
 **/

/**
 * Inflate.result -&gt; Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -&gt; Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -&gt; String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -&gt; last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw &amp;&amp; (opt.windowBits &gt;= 0) &amp;&amp; (opt.windowBits &lt; 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits &gt;= 0) &amp;&amp; (opt.windowBits &lt; 16) &amp;&amp;
      !(options &amp;&amp; options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits &gt; 15) &amp;&amp; (opt.windowBits &lt; 48)) {
    // bit 3 (16) -&gt; gzipped data
    // bit 4 (32) -&gt; autodetect gzip/deflate
    if ((opt.windowBits &amp; 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);
}

/**
 * Inflate#push(data[, mode]) -&gt; Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;
  var dict;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT &amp;&amp; dictionary) {
      // Convert data if needed
      if (typeof dictionary === 'string') {
        dict = strings.string2buf(dictionary);
      } else if (toString.call(dictionary) === '[object ArrayBuffer]') {
        dict = new Uint8Array(dictionary);
      } else {
        dict = dictionary;
      }

      status = zlib_inflate.inflateSetDictionary(this.strm, dict);

    }

    if (status === c.Z_BUF_ERROR &amp;&amp; allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END &amp;&amp; status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 &amp;&amp; (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 &amp;&amp; strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in &gt; 0 || strm.avail_out === 0) &amp;&amp; status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -&gt; Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -&gt; Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue &amp; convert here, until we teach pako to send
      // utf8 alligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -&gt; Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -&gt; Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -&gt; Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;

},{"./utils/common":32,"./utils/strings":33,"./zlib/constants":35,"./zlib/gzheader":38,"./zlib/inflate":40,"./zlib/messages":42,"./zlib/zstream":44}],32:[function(_dereq_,module,exports){
'use strict';


var TYPED_OK =  (typeof Uint8Array !== 'undefined') &amp;&amp;
                (typeof Uint16Array !== 'undefined') &amp;&amp;
                (typeof Int32Array !== 'undefined');


exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (source.hasOwnProperty(p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray &amp;&amp; dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i &lt; len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i &lt; l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i &lt; l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i &lt; len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);

},{}],33:[function(_dereq_,module,exports){
// String encode/decode helpers
'use strict';


var utils = _dereq_('./common');


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safary
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 &amp; 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q &lt; 256; q++) {
  _utf8len[q] = (q &gt;= 252 ? 6 : q &gt;= 248 ? 5 : q &gt;= 240 ? 4 : q &gt;= 224 ? 3 : q &gt;= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos &lt; str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c &amp; 0xfc00) === 0xd800 &amp;&amp; (m_pos + 1 &lt; str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 &amp; 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) &lt;&lt; 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c &lt; 0x80 ? 1 : c &lt; 0x800 ? 2 : c &lt; 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i &lt; buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c &amp; 0xfc00) === 0xd800 &amp;&amp; (m_pos + 1 &lt; str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 &amp; 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) &lt;&lt; 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c &lt; 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c &lt; 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c &gt;&gt;&gt; 6);
      buf[i++] = 0x80 | (c &amp; 0x3f);
    } else if (c &lt; 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c &gt;&gt;&gt; 12);
      buf[i++] = 0x80 | (c &gt;&gt;&gt; 6 &amp; 0x3f);
      buf[i++] = 0x80 | (c &amp; 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c &gt;&gt;&gt; 18);
      buf[i++] = 0x80 | (c &gt;&gt;&gt; 12 &amp; 0x3f);
      buf[i++] = 0x80 | (c &gt;&gt;&gt; 6 &amp; 0x3f);
      buf[i++] = 0x80 | (c &amp; 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // use fallback for big arrays to avoid stack overflow
  if (len &lt; 65537) {
    if ((buf.subarray &amp;&amp; STR_APPLY_UIA_OK) || (!buf.subarray &amp;&amp; STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i &lt; len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i &lt; len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i &lt; len;) {
    c = buf[i++];
    // quick process ascii
    if (c &lt; 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 &amp; 6 byte codes
    if (c_len &gt; 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &amp;= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len &gt; 1 &amp;&amp; i &lt; len) {
      c = (c &lt;&lt; 6) | (buf[i++] &amp; 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len &gt; 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c &lt; 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c &gt;&gt; 10) &amp; 0x3ff);
      utf16buf[out++] = 0xdc00 | (c &amp; 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max &gt; buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos &gt;= 0 &amp;&amp; (buf[pos] &amp; 0xC0) === 0x80) { pos--; }

  // Fuckup - very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos &lt; 0) { return max; }

  // If we came to start of buffer - that means vuffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] &gt; max) ? pos : max;
};

},{"./common":32}],34:[function(_dereq_,module,exports){
'use strict';

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It doesn't worth to make additional optimizationa as in original.
// Small size is preferable.

function adler32(adler, buf, len, pos) {
  var s1 = (adler &amp; 0xffff) |0,
      s2 = ((adler &gt;&gt;&gt; 16) &amp; 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len &gt; 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 &lt;&lt; 16)) |0;
}


module.exports = adler32;

},{}],35:[function(_dereq_,module,exports){
'use strict';


module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

},{}],36:[function(_dereq_,module,exports){
'use strict';

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.


// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n &lt; 256; n++) {
    c = n;
    for (var k = 0; k &lt; 8; k++) {
      c = ((c &amp; 1) ? (0xEDB88320 ^ (c &gt;&gt;&gt; 1)) : (c &gt;&gt;&gt; 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i &lt; end; i++) {
    crc = (crc &gt;&gt;&gt; 8) ^ t[(crc ^ buf[i]) &amp; 0xFF];
  }

  return (crc ^ (-1)); // &gt;&gt;&gt; 0;
}


module.exports = crc32;

},{}],37:[function(_dereq_,module,exports){
'use strict';

var utils   = _dereq_('../utils/common');
var trees   = _dereq_('./trees');
var adler32 = _dereq_('./adler32');
var crc32   = _dereq_('./crc32');
var msg     = _dereq_('./messages');

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) &lt;&lt; 1) - ((f) &gt; 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len &gt;= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm-&gt;output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len &gt; strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start &gt;= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b &gt;&gt; 8));
//  put_byte(s, (Byte)(b &amp; 0xff));
  s.pending_buf[s.pending++] = (b &gt;&gt;&gt; 8) &amp; 0xff;
  s.pending_buf[s.pending++] = b &amp; 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm-&gt;input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len &gt; size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm-&gt;next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is &lt;= MAX_DIST, and prev_length &gt;= 1
 * OUT assertion: the match length is not greater than s-&gt;lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart &gt; (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes &lt;= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS &gt;= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s-&gt;hash_bits &gt;= 8 &amp;&amp; MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length &gt;= s.good_match) {
    chain_length &gt;&gt;= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match &gt; s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s-&gt;strstart &lt;= s-&gt;window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match &lt; s-&gt;strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS &gt;= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] &amp;&amp; _win[++scan] === _win[++match] &amp;&amp;
             _win[++scan] === _win[++match] &amp;&amp; _win[++scan] === _win[++match] &amp;&amp;
             _win[++scan] === _win[++match] &amp;&amp; _win[++scan] === _win[++match] &amp;&amp;
             _win[++scan] === _win[++match] &amp;&amp; _win[++scan] === _win[++match] &amp;&amp;
             scan &lt; strend);

    // Assert(scan &lt;= s-&gt;window+(unsigned)(s-&gt;window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len &gt; best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len &gt;= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match &amp; wmask]) &gt; limit &amp;&amp; --chain_length !== 0);

  if (best_len &lt;= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead &lt; MIN_LOOKAHEAD
 * OUT assertions: strstart &lt;= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s-&gt;lookahead &lt; MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) &lt;= 2) {
    //    if (more == 0 &amp;&amp; s-&gt;strstart == 0 &amp;&amp; s-&gt;lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 &amp;&amp; lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart &gt;= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart &gt;= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level &gt; 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m &gt;= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m &gt;= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart &lt;= WSIZE+MAX_DIST-1 &amp;&amp; lookahead &lt;= MIN_LOOKAHEAD - 1 &amp;&amp;
     *    more == window_size - lookahead - strstart
     * =&gt; more &gt;= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * =&gt; more &gt;= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &amp;&amp;
     *   strstart + s-&gt;lookahead &lt;= input_size =&gt; more &gt;= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more &gt;= 2.
     * If there was sliding, more &gt;= WSIZE. So in all cases, more &gt;= 2.
     */
    //Assert(more &gt;= 2, "more &lt; 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert &gt;= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s-&gt;ins_h, s-&gt;window[str + 1]); */
      s.ins_h = ((s.ins_h &lt;&lt; s.hash_shift) ^ s.window[str + 1]) &amp; s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s-&gt;ins_h, s-&gt;window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h &lt;&lt; s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) &amp; s.hash_mask;

        s.prev[str &amp; s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert &lt; MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead &lt; MIN_LOOKAHEAD &amp;&amp; s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water &lt; s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water &lt; curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init &gt; WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s-&gt;window + curr, (unsigned)init);
//      s-&gt;high_water = curr + init;
//    }
//    else if (s-&gt;high_water &lt; (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s-&gt;high_water;
//      if (init &gt; s-&gt;window_size - s-&gt;high_water)
//        init = s-&gt;window_size - s-&gt;high_water;
//      zmemzero(s-&gt;window + s-&gt;high_water, (unsigned)init);
//      s-&gt;high_water += init;
//    }
//  }
//
//  Assert((ulg)s-&gt;strstart &lt;= s-&gt;window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size &gt; s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead &lt;= 1) {

      //Assert(s-&gt;strstart &lt; s-&gt;w_size+MAX_DIST(s) ||
      //  s-&gt;block_start &gt;= (long)s-&gt;w_size, "slide too late");
//      if (!(s.strstart &lt; s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start &gt;= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 &amp;&amp; flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s-&gt;block_start &gt;= 0L, "block gone");
//    if (s.block_start &lt; 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart &gt;= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start &gt;= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart &gt; s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead &lt; MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead &lt; MIN_LOOKAHEAD &amp;&amp; flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead &gt;= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h &lt;&lt; s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) &amp; s.hash_mask;
      hash_head = s.prev[s.strstart &amp; s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those &lt;= prev_length.
     * At this point we have always match_length &lt; MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ &amp;&amp; ((s.strstart - hash_head) &lt;= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length &gt;= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length &lt;= s.max_lazy_match/*max_insert_length*/ &amp;&amp; s.lookahead &gt;= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h &lt;&lt; s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) &amp; s.hash_mask;
          hash_head = s.prev[s.strstart &amp; s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h &lt;&lt; s.hash_shift) ^ s.window[s.strstart + 1]) &amp; s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead &lt; MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart &lt; (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead &lt; MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead &lt; MIN_LOOKAHEAD &amp;&amp; flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead &gt;= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h &lt;&lt; s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) &amp; s.hash_mask;
      hash_head = s.prev[s.strstart &amp; s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those &lt;= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ &amp;&amp; s.prev_length &lt; s.max_lazy_match &amp;&amp;
        s.strstart - hash_head &lt;= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length &lt;= 5 &amp;&amp;
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH &amp;&amp; s.strstart - s.match_start &gt; 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length &gt;= MIN_MATCH &amp;&amp; s.match_length &lt;= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart &lt;= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h &lt;&lt; s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) &amp; s.hash_mask;
          hash_head = s.prev[s.strstart &amp; s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s-&gt;window[s-&gt;strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s-&gt;window[s-&gt;strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart &lt; MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead &lt;= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead &lt;= MAX_MATCH &amp;&amp; flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead &gt;= MIN_MATCH &amp;&amp; s.strstart &gt; 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] &amp;&amp; prev === _win[++scan] &amp;&amp; prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] &amp;&amp; prev === _win[++scan] &amp;&amp;
                 prev === _win[++scan] &amp;&amp; prev === _win[++scan] &amp;&amp;
                 prev === _win[++scan] &amp;&amp; prev === _win[++scan] &amp;&amp;
                 prev === _win[++scan] &amp;&amp; prev === _win[++scan] &amp;&amp;
                 scan &lt; strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length &gt; s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan &lt;= s-&gt;window+(uInt)(s-&gt;window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length &gt;= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s-&gt;window[s-&gt;strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s-&gt;window[s-&gt;strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH &gt;= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels &gt;= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels &lt;= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap &lt; 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits &lt; 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits &gt; 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel &lt; 1 || memLevel &gt; MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits &lt; 8 || windowBits &gt; 15 || level &lt; 0 || level &gt; 9 ||
    strategy &lt; 0 || strategy &gt; Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 &lt;&lt; s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 &lt;&lt; s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s-&gt;window yet */

  s.lit_bufsize = 1 &lt;&lt; (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  s.d_buf = s.lit_bufsize &gt;&gt; 1;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush &gt; Z_BLOCK || flush &lt; 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input &amp;&amp; strm.avail_in !== 0) ||
      (s.status === FINISH_STATE &amp;&amp; flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s-&gt;gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy &gt;= Z_HUFFMAN_ONLY || s.level &lt; 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
                );
        put_byte(s, s.gzhead.time &amp; 0xff);
        put_byte(s, (s.gzhead.time &gt;&gt; 8) &amp; 0xff);
        put_byte(s, (s.gzhead.time &gt;&gt; 16) &amp; 0xff);
        put_byte(s, (s.gzhead.time &gt;&gt; 24) &amp; 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy &gt;= Z_HUFFMAN_ONLY || s.level &lt; 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os &amp; 0xff);
        if (s.gzhead.extra &amp;&amp; s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length &amp; 0xff);
          put_byte(s, (s.gzhead.extra.length &gt;&gt; 8) &amp; 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) &lt;&lt; 4)) &lt;&lt; 8;
      var level_flags = -1;

      if (s.strategy &gt;= Z_HUFFMAN_ONLY || s.level &lt; 2) {
        level_flags = 0;
      } else if (s.level &lt; 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags &lt;&lt; 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler &gt;&gt;&gt; 16);
        putShortMSB(s, strm.adler &amp; 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex &lt; (s.gzhead.extra.length &amp; 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc &amp;&amp; s.pending &gt; beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] &amp; 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc &amp;&amp; s.pending &gt; beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc &amp;&amp; s.pending &gt; beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex &lt; s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) &amp; 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc &amp;&amp; s.pending &gt; beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc &amp;&amp; s.pending &gt; beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex &lt; s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) &amp; 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc &amp;&amp; s.pending &gt; beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 &gt; s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 &lt;= s.pending_buf_size) {
        put_byte(s, strm.adler &amp; 0xff);
        put_byte(s, (strm.adler &gt;&gt; 8) &amp; 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 &amp;&amp; rank(flush) &lt;= rank(old_flush) &amp;&amp;
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE &amp;&amp; strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH &amp;&amp; s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH &amp;&amp; avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm-&gt;avail_out &gt; 0, "bug2");
  //if (strm.avail_out &lt;= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap &lt;= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler &amp; 0xff);
    put_byte(s, (strm.adler &gt;&gt; 8) &amp; 0xff);
    put_byte(s, (strm.adler &gt;&gt; 16) &amp; 0xff);
    put_byte(s, (strm.adler &gt;&gt; 24) &amp; 0xff);
    put_byte(s, strm.total_in &amp; 0xff);
    put_byte(s, (strm.total_in &gt;&gt; 8) &amp; 0xff);
    put_byte(s, (strm.total_in &gt;&gt; 16) &amp; 0xff);
    put_byte(s, (strm.total_in &gt;&gt; 24) &amp; 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler &gt;&gt;&gt; 16);
    putShortMSB(s, strm.adler &amp; 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap &gt; 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &amp;&amp;
    status !== EXTRA_STATE &amp;&amp;
    status !== NAME_STATE &amp;&amp;
    status !== COMMENT_STATE &amp;&amp;
    status !== HCRC_STATE &amp;&amp;
    status !== BUSY_STATE &amp;&amp;
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 &amp;&amp; s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm-&gt;adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength &gt;= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead &gt;= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s-&gt;ins_h, s-&gt;window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h &lt;&lt; s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) &amp; s.hash_mask;

      s.prev[str &amp; s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/

},{"../utils/common":32,"./adler32":34,"./crc32":36,"./messages":42,"./trees":43}],38:[function(_dereq_,module,exports){
'use strict';


function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;

},{}],39:[function(_dereq_,module,exports){
'use strict';

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in &gt;= 6
        strm.avail_out &gt;= 258
        start &gt;= strm.avail_out
        state.bits &lt; 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in &gt;= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out &gt;= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in &lt; last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out &lt; end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 &lt;&lt; state.lenbits) - 1;
  dmask = (1 &lt;&lt; state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits &lt; 15) {
      hold += input[_in++] &lt;&lt; bits;
      bits += 8;
      hold += input[_in++] &lt;&lt; bits;
      bits += 8;
    }

    here = lcode[hold &amp; lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here &gt;&gt;&gt; 24/*here.bits*/;
      hold &gt;&gt;&gt;= op;
      bits -= op;
      op = (here &gt;&gt;&gt; 16) &amp; 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val &gt;= 0x20 &amp;&amp; here.val &lt; 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here &amp; 0xffff/*here.val*/;
      }
      else if (op &amp; 16) {                     /* length base */
        len = here &amp; 0xffff/*here.val*/;
        op &amp;= 15;                           /* number of extra bits */
        if (op) {
          if (bits &lt; op) {
            hold += input[_in++] &lt;&lt; bits;
            bits += 8;
          }
          len += hold &amp; ((1 &lt;&lt; op) - 1);
          hold &gt;&gt;&gt;= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits &lt; 15) {
          hold += input[_in++] &lt;&lt; bits;
          bits += 8;
          hold += input[_in++] &lt;&lt; bits;
          bits += 8;
        }
        here = dcode[hold &amp; dmask];

        dodist:
        for (;;) { // goto emulation
          op = here &gt;&gt;&gt; 24/*here.bits*/;
          hold &gt;&gt;&gt;= op;
          bits -= op;
          op = (here &gt;&gt;&gt; 16) &amp; 0xff/*here.op*/;

          if (op &amp; 16) {                      /* distance base */
            dist = here &amp; 0xffff/*here.val*/;
            op &amp;= 15;                       /* number of extra bits */
            if (bits &lt; op) {
              hold += input[_in++] &lt;&lt; bits;
              bits += 8;
              if (bits &lt; op) {
                hold += input[_in++] &lt;&lt; bits;
                bits += 8;
              }
            }
            dist += hold &amp; ((1 &lt;&lt; op) - 1);
//#ifdef INFLATE_STRICT
            if (dist &gt; dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold &gt;&gt;&gt;= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist &gt; op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op &gt; whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len &lt;= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op &gt; whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op &lt; len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext &lt; op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op &lt; len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext &lt; len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op &lt; len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len &gt; 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len &gt; 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len &gt; 2);
              if (len) {
                output[_out++] = output[from++];
                if (len &gt; 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op &amp; 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here &amp; 0xffff)/*here.val*/ + (hold &amp; ((1 &lt;&lt; op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op &amp; 64) === 0) {              /* 2nd level length code */
        here = lcode[(here &amp; 0xffff)/*here.val*/ + (hold &amp; ((1 &lt;&lt; op) - 1))];
        continue dolen;
      }
      else if (op &amp; 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in &lt; last &amp;&amp; _out &lt; end);

  /* return unused bytes (on entry, bits &lt; 8, so in won't go too far back) */
  len = bits &gt;&gt; 3;
  _in -= len;
  bits -= len &lt;&lt; 3;
  hold &amp;= (1 &lt;&lt; bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in &lt; last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out &lt; end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

},{}],40:[function(_dereq_,module,exports){
'use strict';


var utils         = _dereq_('../utils/common');
var adler32       = _dereq_('./adler32');
var crc32         = _dereq_('./crc32');
var inflate_fast  = _dereq_('./inffast');
var inflate_table = _dereq_('./inftrees');

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q &gt;&gt;&gt; 24) &amp; 0xff) +
          ((q &gt;&gt;&gt; 8) &amp; 0xff00) +
          ((q &amp; 0xff00) &lt;&lt; 8) +
          ((q &amp; 0xff) &lt;&lt; 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap &amp; 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits &lt; 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits &gt;&gt; 4) + 1;
    if (windowBits &lt; 48) {
      windowBits &amp;= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits &amp;&amp; (windowBits &lt; 8 || windowBits &gt; 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null &amp;&amp; state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym &lt; 144) { state.lens[sym++] = 8; }
    while (sym &lt; 256) { state.lens[sym++] = 9; }
    while (sym &lt; 280) { state.lens[sym++] = 7; }
    while (sym &lt; 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym &lt; 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 &lt;&lt; state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state-&gt;wsize or less output bytes into the circular window */
  if (copy &gt;= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist &gt; copy) {
      dist = copy;
    }
    //zmemcpy(state-&gt;window + state-&gt;wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state-&gt;window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave &lt; state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input &amp;&amp; strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
    case HEAD:
      if (state.wrap === 0) {
        state.mode = TYPEDO;
        break;
      }
      //=== NEEDBITS(16);
      while (bits &lt; 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] &lt;&lt; bits;
        bits += 8;
      }
      //===//
      if ((state.wrap &amp; 2) &amp;&amp; hold === 0x8b1f) {  /* gzip header */
        state.check = 0/*crc32(0L, Z_NULL, 0)*/;
        //=== CRC2(state.check, hold);
        hbuf[0] = hold &amp; 0xff;
        hbuf[1] = (hold &gt;&gt;&gt; 8) &amp; 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//

        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = FLAGS;
        break;
      }
      state.flags = 0;           /* expect zlib header */
      if (state.head) {
        state.head.done = false;
      }
      if (!(state.wrap &amp; 1) ||   /* check if zlib header allowed */
        (((hold &amp; 0xff)/*BITS(8)*/ &lt;&lt; 8) + (hold &gt;&gt; 8)) % 31) {
        strm.msg = 'incorrect header check';
        state.mode = BAD;
        break;
      }
      if ((hold &amp; 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      //--- DROPBITS(4) ---//
      hold &gt;&gt;&gt;= 4;
      bits -= 4;
      //---//
      len = (hold &amp; 0x0f)/*BITS(4)*/ + 8;
      if (state.wbits === 0) {
        state.wbits = len;
      }
      else if (len &gt; state.wbits) {
        strm.msg = 'invalid window size';
        state.mode = BAD;
        break;
      }
      state.dmax = 1 &lt;&lt; len;
      //Tracev((stderr, "inflate:   zlib header ok\n"));
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = hold &amp; 0x200 ? DICTID : TYPE;
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      break;
    case FLAGS:
      //=== NEEDBITS(16); */
      while (bits &lt; 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] &lt;&lt; bits;
        bits += 8;
      }
      //===//
      state.flags = hold;
      if ((state.flags &amp; 0xff) !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      if (state.flags &amp; 0xe000) {
        strm.msg = 'unknown header flags set';
        state.mode = BAD;
        break;
      }
      if (state.head) {
        state.head.text = ((hold &gt;&gt; 8) &amp; 1);
      }
      if (state.flags &amp; 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold &amp; 0xff;
        hbuf[1] = (hold &gt;&gt;&gt; 8) &amp; 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = TIME;
      /* falls through */
    case TIME:
      //=== NEEDBITS(32); */
      while (bits &lt; 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] &lt;&lt; bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.time = hold;
      }
      if (state.flags &amp; 0x0200) {
        //=== CRC4(state.check, hold)
        hbuf[0] = hold &amp; 0xff;
        hbuf[1] = (hold &gt;&gt;&gt; 8) &amp; 0xff;
        hbuf[2] = (hold &gt;&gt;&gt; 16) &amp; 0xff;
        hbuf[3] = (hold &gt;&gt;&gt; 24) &amp; 0xff;
        state.check = crc32(state.check, hbuf, 4, 0);
        //===
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = OS;
      /* falls through */
    case OS:
      //=== NEEDBITS(16); */
      while (bits &lt; 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] &lt;&lt; bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.xflags = (hold &amp; 0xff);
        state.head.os = (hold &gt;&gt; 8);
      }
      if (state.flags &amp; 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold &amp; 0xff;
        hbuf[1] = (hold &gt;&gt;&gt; 8) &amp; 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = EXLEN;
      /* falls through */
    case EXLEN:
      if (state.flags &amp; 0x0400) {
        //=== NEEDBITS(16); */
        while (bits &lt; 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] &lt;&lt; bits;
          bits += 8;
        }
        //===//
        state.length = hold;
        if (state.head) {
          state.head.extra_len = hold;
        }
        if (state.flags &amp; 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold &amp; 0xff;
          hbuf[1] = (hold &gt;&gt;&gt; 8) &amp; 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      else if (state.head) {
        state.head.extra = null/*Z_NULL*/;
      }
      state.mode = EXTRA;
      /* falls through */
    case EXTRA:
      if (state.flags &amp; 0x0400) {
        copy = state.length;
        if (copy &gt; have) { copy = have; }
        if (copy) {
          if (state.head) {
            len = state.head.extra_len - state.length;
            if (!state.head.extra) {
              // Use untyped array for more conveniend processing later
              state.head.extra = new Array(state.head.extra_len);
            }
            utils.arraySet(
              state.head.extra,
              input,
              next,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              copy,
              /*len + copy &gt; state.head.extra_max - len ? state.head.extra_max : copy,*/
              len
            );
            //zmemcpy(state.head.extra + len, next,
            //        len + copy &gt; state.head.extra_max ?
            //        state.head.extra_max - len : copy);
          }
          if (state.flags &amp; 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          state.length -= copy;
        }
        if (state.length) { break inf_leave; }
      }
      state.length = 0;
      state.mode = NAME;
      /* falls through */
    case NAME:
      if (state.flags &amp; 0x0800) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          // TODO: 2 or 1 bytes?
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head &amp;&amp; len &amp;&amp;
              (state.length &lt; 65536 /*state.head.name_max*/)) {
            state.head.name += String.fromCharCode(len);
          }
        } while (len &amp;&amp; copy &lt; have);

        if (state.flags &amp; 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.name = null;
      }
      state.length = 0;
      state.mode = COMMENT;
      /* falls through */
    case COMMENT:
      if (state.flags &amp; 0x1000) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head &amp;&amp; len &amp;&amp;
              (state.length &lt; 65536 /*state.head.comm_max*/)) {
            state.head.comment += String.fromCharCode(len);
          }
        } while (len &amp;&amp; copy &lt; have);
        if (state.flags &amp; 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.comment = null;
      }
      state.mode = HCRC;
      /* falls through */
    case HCRC:
      if (state.flags &amp; 0x0200) {
        //=== NEEDBITS(16); */
        while (bits &lt; 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] &lt;&lt; bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.check &amp; 0xffff)) {
          strm.msg = 'header crc mismatch';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      if (state.head) {
        state.head.hcrc = ((state.flags &gt;&gt; 9) &amp; 1);
        state.head.done = true;
      }
      strm.adler = state.check = 0;
      state.mode = TYPE;
      break;
    case DICTID:
      //=== NEEDBITS(32); */
      while (bits &lt; 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] &lt;&lt; bits;
        bits += 8;
      }
      //===//
      strm.adler = state.check = zswap32(hold);
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = DICT;
      /* falls through */
    case DICT:
      if (state.havedict === 0) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        return Z_NEED_DICT;
      }
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = TYPE;
      /* falls through */
    case TYPE:
      if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case TYPEDO:
      if (state.last) {
        //--- BYTEBITS() ---//
        hold &gt;&gt;&gt;= bits &amp; 7;
        bits -= bits &amp; 7;
        //---//
        state.mode = CHECK;
        break;
      }
      //=== NEEDBITS(3); */
      while (bits &lt; 3) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] &lt;&lt; bits;
        bits += 8;
      }
      //===//
      state.last = (hold &amp; 0x01)/*BITS(1)*/;
      //--- DROPBITS(1) ---//
      hold &gt;&gt;&gt;= 1;
      bits -= 1;
      //---//

      switch ((hold &amp; 0x03)/*BITS(2)*/) {
      case 0:                             /* stored block */
        //Tracev((stderr, "inflate:     stored block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = STORED;
        break;
      case 1:                             /* fixed block */
        fixedtables(state);
        //Tracev((stderr, "inflate:     fixed codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = LEN_;             /* decode codes */
        if (flush === Z_TREES) {
          //--- DROPBITS(2) ---//
          hold &gt;&gt;&gt;= 2;
          bits -= 2;
          //---//
          break inf_leave;
        }
        break;
      case 2:                             /* dynamic block */
        //Tracev((stderr, "inflate:     dynamic codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = TABLE;
        break;
      case 3:
        strm.msg = 'invalid block type';
        state.mode = BAD;
      }
      //--- DROPBITS(2) ---//
      hold &gt;&gt;&gt;= 2;
      bits -= 2;
      //---//
      break;
    case STORED:
      //--- BYTEBITS() ---// /* go to byte boundary */
      hold &gt;&gt;&gt;= bits &amp; 7;
      bits -= bits &amp; 7;
      //---//
      //=== NEEDBITS(32); */
      while (bits &lt; 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] &lt;&lt; bits;
        bits += 8;
      }
      //===//
      if ((hold &amp; 0xffff) !== ((hold &gt;&gt;&gt; 16) ^ 0xffff)) {
        strm.msg = 'invalid stored block lengths';
        state.mode = BAD;
        break;
      }
      state.length = hold &amp; 0xffff;
      //Tracev((stderr, "inflate:       stored length %u\n",
      //        state.length));
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = COPY_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case COPY_:
      state.mode = COPY;
      /* falls through */
    case COPY:
      copy = state.length;
      if (copy) {
        if (copy &gt; have) { copy = have; }
        if (copy &gt; left) { copy = left; }
        if (copy === 0) { break inf_leave; }
        //--- zmemcpy(put, next, copy); ---
        utils.arraySet(output, input, next, copy, put);
        //---//
        have -= copy;
        next += copy;
        left -= copy;
        put += copy;
        state.length -= copy;
        break;
      }
      //Tracev((stderr, "inflate:       stored end\n"));
      state.mode = TYPE;
      break;
    case TABLE:
      //=== NEEDBITS(14); */
      while (bits &lt; 14) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] &lt;&lt; bits;
        bits += 8;
      }
      //===//
      state.nlen = (hold &amp; 0x1f)/*BITS(5)*/ + 257;
      //--- DROPBITS(5) ---//
      hold &gt;&gt;&gt;= 5;
      bits -= 5;
      //---//
      state.ndist = (hold &amp; 0x1f)/*BITS(5)*/ + 1;
      //--- DROPBITS(5) ---//
      hold &gt;&gt;&gt;= 5;
      bits -= 5;
      //---//
      state.ncode = (hold &amp; 0x0f)/*BITS(4)*/ + 4;
      //--- DROPBITS(4) ---//
      hold &gt;&gt;&gt;= 4;
      bits -= 4;
      //---//
//#ifndef PKZIP_BUG_WORKAROUND
      if (state.nlen &gt; 286 || state.ndist &gt; 30) {
        strm.msg = 'too many length or distance symbols';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracev((stderr, "inflate:       table sizes ok\n"));
      state.have = 0;
      state.mode = LENLENS;
      /* falls through */
    case LENLENS:
      while (state.have &lt; state.ncode) {
        //=== NEEDBITS(3);
        while (bits &lt; 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] &lt;&lt; bits;
          bits += 8;
        }
        //===//
        state.lens[order[state.have++]] = (hold &amp; 0x07);//BITS(3);
        //--- DROPBITS(3) ---//
        hold &gt;&gt;&gt;= 3;
        bits -= 3;
        //---//
      }
      while (state.have &lt; 19) {
        state.lens[order[state.have++]] = 0;
      }
      // We have separate tables &amp; no pointers. 2 commented lines below not needed.
      //state.next = state.codes;
      //state.lencode = state.next;
      // Switch to use dynamic table
      state.lencode = state.lendyn;
      state.lenbits = 7;

      opts = { bits: state.lenbits };
      ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
      state.lenbits = opts.bits;

      if (ret) {
        strm.msg = 'invalid code lengths set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, "inflate:       code lengths ok\n"));
      state.have = 0;
      state.mode = CODELENS;
      /* falls through */
    case CODELENS:
      while (state.have &lt; state.nlen + state.ndist) {
        for (;;) {
          here = state.lencode[hold &amp; ((1 &lt;&lt; state.lenbits) - 1)];/*BITS(state.lenbits)*/
          here_bits = here &gt;&gt;&gt; 24;
          here_op = (here &gt;&gt;&gt; 16) &amp; 0xff;
          here_val = here &amp; 0xffff;

          if ((here_bits) &lt;= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] &lt;&lt; bits;
          bits += 8;
          //---//
        }
        if (here_val &lt; 16) {
          //--- DROPBITS(here.bits) ---//
          hold &gt;&gt;&gt;= here_bits;
          bits -= here_bits;
          //---//
          state.lens[state.have++] = here_val;
        }
        else {
          if (here_val === 16) {
            //=== NEEDBITS(here.bits + 2);
            n = here_bits + 2;
            while (bits &lt; n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] &lt;&lt; bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold &gt;&gt;&gt;= here_bits;
            bits -= here_bits;
            //---//
            if (state.have === 0) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            len = state.lens[state.have - 1];
            copy = 3 + (hold &amp; 0x03);//BITS(2);
            //--- DROPBITS(2) ---//
            hold &gt;&gt;&gt;= 2;
            bits -= 2;
            //---//
          }
          else if (here_val === 17) {
            //=== NEEDBITS(here.bits + 3);
            n = here_bits + 3;
            while (bits &lt; n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] &lt;&lt; bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold &gt;&gt;&gt;= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 3 + (hold &amp; 0x07);//BITS(3);
            //--- DROPBITS(3) ---//
            hold &gt;&gt;&gt;= 3;
            bits -= 3;
            //---//
          }
          else {
            //=== NEEDBITS(here.bits + 7);
            n = here_bits + 7;
            while (bits &lt; n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] &lt;&lt; bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold &gt;&gt;&gt;= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 11 + (hold &amp; 0x7f);//BITS(7);
            //--- DROPBITS(7) ---//
            hold &gt;&gt;&gt;= 7;
            bits -= 7;
            //---//
          }
          if (state.have + copy &gt; state.nlen + state.ndist) {
            strm.msg = 'invalid bit length repeat';
            state.mode = BAD;
            break;
          }
          while (copy--) {
            state.lens[state.have++] = len;
          }
        }
      }

      /* handle error breaks in while */
      if (state.mode === BAD) { break; }

      /* check for end-of-block code (better have one) */
      if (state.lens[256] === 0) {
        strm.msg = 'invalid code -- missing end-of-block';
        state.mode = BAD;
        break;
      }

      /* build code tables -- note: do not change the lenbits or distbits
         values here (9 and 6) without reading the comments in inftrees.h
         concerning the ENOUGH constants, which depend on those values */
      state.lenbits = 9;

      opts = { bits: state.lenbits };
      ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
      // We have separate tables &amp; no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.lenbits = opts.bits;
      // state.lencode = state.next;

      if (ret) {
        strm.msg = 'invalid literal/lengths set';
        state.mode = BAD;
        break;
      }

      state.distbits = 6;
      //state.distcode.copy(state.codes);
      // Switch to use dynamic table
      state.distcode = state.distdyn;
      opts = { bits: state.distbits };
      ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
      // We have separate tables &amp; no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.distbits = opts.bits;
      // state.distcode = state.next;

      if (ret) {
        strm.msg = 'invalid distances set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, 'inflate:       codes ok\n'));
      state.mode = LEN_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case LEN_:
      state.mode = LEN;
      /* falls through */
    case LEN:
      if (have &gt;= 6 &amp;&amp; left &gt;= 258) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        inflate_fast(strm, _out);
        //--- LOAD() ---
        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits;
        //---

        if (state.mode === TYPE) {
          state.back = -1;
        }
        break;
      }
      state.back = 0;
      for (;;) {
        here = state.lencode[hold &amp; ((1 &lt;&lt; state.lenbits) - 1)];  /*BITS(state.lenbits)*/
        here_bits = here &gt;&gt;&gt; 24;
        here_op = (here &gt;&gt;&gt; 16) &amp; 0xff;
        here_val = here &amp; 0xffff;

        if (here_bits &lt;= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] &lt;&lt; bits;
        bits += 8;
        //---//
      }
      if (here_op &amp;&amp; (here_op &amp; 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.lencode[last_val +
                  ((hold &amp; ((1 &lt;&lt; (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ &gt;&gt; last_bits)];
          here_bits = here &gt;&gt;&gt; 24;
          here_op = (here &gt;&gt;&gt; 16) &amp; 0xff;
          here_val = here &amp; 0xffff;

          if ((last_bits + here_bits) &lt;= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] &lt;&lt; bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold &gt;&gt;&gt;= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold &gt;&gt;&gt;= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      state.length = here_val;
      if (here_op === 0) {
        //Tracevv((stderr, here.val &gt;= 0x20 &amp;&amp; here.val &lt; 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        state.mode = LIT;
        break;
      }
      if (here_op &amp; 32) {
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.back = -1;
        state.mode = TYPE;
        break;
      }
      if (here_op &amp; 64) {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break;
      }
      state.extra = here_op &amp; 15;
      state.mode = LENEXT;
      /* falls through */
    case LENEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits &lt; n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] &lt;&lt; bits;
          bits += 8;
        }
        //===//
        state.length += hold &amp; ((1 &lt;&lt; state.extra) - 1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold &gt;&gt;&gt;= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
      //Tracevv((stderr, "inflate:         length %u\n", state.length));
      state.was = state.length;
      state.mode = DIST;
      /* falls through */
    case DIST:
      for (;;) {
        here = state.distcode[hold &amp; ((1 &lt;&lt; state.distbits) - 1)];/*BITS(state.distbits)*/
        here_bits = here &gt;&gt;&gt; 24;
        here_op = (here &gt;&gt;&gt; 16) &amp; 0xff;
        here_val = here &amp; 0xffff;

        if ((here_bits) &lt;= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] &lt;&lt; bits;
        bits += 8;
        //---//
      }
      if ((here_op &amp; 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.distcode[last_val +
                  ((hold &amp; ((1 &lt;&lt; (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ &gt;&gt; last_bits)];
          here_bits = here &gt;&gt;&gt; 24;
          here_op = (here &gt;&gt;&gt; 16) &amp; 0xff;
          here_val = here &amp; 0xffff;

          if ((last_bits + here_bits) &lt;= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] &lt;&lt; bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold &gt;&gt;&gt;= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold &gt;&gt;&gt;= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      if (here_op &amp; 64) {
        strm.msg = 'invalid distance code';
        state.mode = BAD;
        break;
      }
      state.offset = here_val;
      state.extra = (here_op) &amp; 15;
      state.mode = DISTEXT;
      /* falls through */
    case DISTEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits &lt; n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] &lt;&lt; bits;
          bits += 8;
        }
        //===//
        state.offset += hold &amp; ((1 &lt;&lt; state.extra) - 1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold &gt;&gt;&gt;= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
//#ifdef INFLATE_STRICT
      if (state.offset &gt; state.dmax) {
        strm.msg = 'invalid distance too far back';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
      state.mode = MATCH;
      /* falls through */
    case MATCH:
      if (left === 0) { break inf_leave; }
      copy = _out - left;
      if (state.offset &gt; copy) {         /* copy from window */
        copy = state.offset - copy;
        if (copy &gt; state.whave) {
          if (state.sane) {
            strm.msg = 'invalid distance too far back';
            state.mode = BAD;
            break;
          }
// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy &gt; state.length) { copy = state.length; }
//          if (copy &gt; left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
        }
        if (copy &gt; state.wnext) {
          copy -= state.wnext;
          from = state.wsize - copy;
        }
        else {
          from = state.wnext - copy;
        }
        if (copy &gt; state.length) { copy = state.length; }
        from_source = state.window;
      }
      else {                              /* copy from output */
        from_source = output;
        from = put - state.offset;
        copy = state.length;
      }
      if (copy &gt; left) { copy = left; }
      left -= copy;
      state.length -= copy;
      do {
        output[put++] = from_source[from++];
      } while (--copy);
      if (state.length === 0) { state.mode = LEN; }
      break;
    case LIT:
      if (left === 0) { break inf_leave; }
      output[put++] = state.length;
      left--;
      state.mode = LEN;
      break;
    case CHECK:
      if (state.wrap) {
        //=== NEEDBITS(32);
        while (bits &lt; 32) {
          if (have === 0) { break inf_leave; }
          have--;
          // Use '|' insdead of '+' to make sure that result is signed
          hold |= input[next++] &lt;&lt; bits;
          bits += 8;
        }
        //===//
        _out -= left;
        strm.total_out += _out;
        state.total += _out;
        if (_out) {
          strm.adler = state.check =
              /*UPDATE(state.check, put - _out, _out);*/
              (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

        }
        _out = left;
        // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
        if ((state.flags ? hold : zswap32(hold)) !== state.check) {
          strm.msg = 'incorrect data check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   check matches trailer\n"));
      }
      state.mode = LENGTH;
      /* falls through */
    case LENGTH:
      if (state.wrap &amp;&amp; state.flags) {
        //=== NEEDBITS(32);
        while (bits &lt; 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] &lt;&lt; bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.total &amp; 0xffffffff)) {
          strm.msg = 'incorrect length check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   length matches trailer\n"));
      }
      state.mode = DONE;
      /* falls through */
    case DONE:
      ret = Z_STREAM_END;
      break inf_leave;
    case BAD:
      ret = Z_DATA_ERROR;
      break inf_leave;
    case MEM:
      return Z_MEM_ERROR;
    case SYNC:
      /* falls through */
    default:
      return Z_STREAM_ERROR;
    }
  }

  // inf_leave &lt;- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out &amp;&amp; state.mode &lt; BAD &amp;&amp;
                      (state.mode &lt; CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap &amp;&amp; _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 &amp;&amp; _out === 0) || flush === Z_FINISH) &amp;&amp; ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm-&gt;zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap &amp; 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 &amp;&amp; state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/

},{"../utils/common":32,"./adler32":34,"./crc32":36,"./inffast":39,"./inftrees":41}],41:[function(_dereq_,module,exports){
'use strict';


var utils = _dereq_('../utils/common');

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol &gt; end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len &lt;= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym &lt; codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max &gt;= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root &gt; max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 &lt;&lt; 24) | (64 &lt;&lt; 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 &lt;&lt; 24) | (64 &lt;&lt; 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min &lt; max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root &lt; min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len &lt;= MAXBITS; len++) {
    left &lt;&lt;= 1;
    left -= count[len];
    if (left &lt; 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left &gt; 0 &amp;&amp; (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len &lt; MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym &lt; codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len &gt; root */
  used = 1 &lt;&lt; root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS &amp;&amp; used &gt; ENOUGH_LENS) ||
    (type === DISTS &amp;&amp; used &gt; ENOUGH_DISTS)) {
    return 1;
  }

  var i = 0;
  /* process all codes and make table entries */
  for (;;) {
    i++;
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] &lt; end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] &gt; end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 &lt;&lt; (len - drop);
    fill = 1 &lt;&lt; curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff &gt;&gt; drop) + fill] = (here_bits &lt;&lt; 24) | (here_op &lt;&lt; 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 &lt;&lt; (len - 1);
    while (huff &amp; incr) {
      incr &gt;&gt;= 1;
    }
    if (incr !== 0) {
      huff &amp;= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len &gt; root &amp;&amp; (huff &amp; mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 &lt;&lt; curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 &lt;&lt; curr;
      while (curr + drop &lt; max) {
        left -= count[curr + drop];
        if (left &lt;= 0) { break; }
        curr++;
        left &lt;&lt;= 1;
      }

      /* check for enough space */
      used += 1 &lt;&lt; curr;
      if ((type === LENS &amp;&amp; used &gt; ENOUGH_LENS) ||
        (type === DISTS &amp;&amp; used &gt; ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff &amp; mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root &lt;&lt; 24) | (curr &lt;&lt; 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) &lt;&lt; 24) | (64 &lt;&lt; 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};

},{"../utils/common":32}],42:[function(_dereq_,module,exports){
'use strict';

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

},{}],43:[function(_dereq_,module,exports){
'use strict';


var utils = _dereq_('../utils/common');

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len &gt;= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array insdead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree &amp;&amp; static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist &lt; 256 ? _dist_code[dist] : _dist_code[256 + (dist &gt;&gt;&gt; 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) &amp; 0xff));
//    put_byte(s, (uch)((ush)(w) &gt;&gt; 8));
  s.pending_buf[s.pending++] = (w) &amp; 0xff;
  s.pending_buf[s.pending++] = (w &gt;&gt;&gt; 8) &amp; 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length &lt;= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid &gt; (Buf_size - length)) {
    s.bi_buf |= (value &lt;&lt; s.bi_valid) &amp; 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value &gt;&gt; (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value &lt;&lt; s.bi_valid) &amp; 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 &lt;= len &lt;= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code &amp; 1;
    code &gt;&gt;&gt;= 1;
    res &lt;&lt;= 1;
  } while (--len &gt; 0);
  return res &gt;&gt;&gt; 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid &gt;= 8) {
    s.pending_buf[s.pending++] = s.bi_buf &amp; 0xff;
    s.bi_buf &gt;&gt;= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits &lt;= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h &lt; HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits &gt; max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n &gt; max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n &gt;= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow &gt; 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m &gt; max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d-&gt;%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits &lt;= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) &lt;&lt; 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1&lt;&lt;MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n &lt;= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -&gt; length code (0..28) */
  length = 0;
  for (code = 0; code &lt; LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n &lt; (1 &lt;&lt; extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -&gt; dist code (0..29) */
  dist = 0;
  for (code = 0; code &lt; 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n &lt; (1 &lt;&lt; extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist &gt;&gt;= 7; /* from now on, all distances are divided by 128 */
  for (; code &lt; D_CODES; code++) {
    base_dist[code] = dist &lt;&lt; 7;
    for (n = 0; n &lt; (1 &lt;&lt; (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits &lt;= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n &lt;= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n &lt;= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n &lt;= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n &lt;= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n &lt; D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n &lt; L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n &lt; D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n &lt; BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid &gt; 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid &gt; 0) {
    //put_byte(s, (Byte)s-&gt;bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ &lt; tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ &amp;&amp; depth[n] &lt;= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k &lt;&lt; 1;  /* left son of k */
  while (j &lt;= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j &lt; s.heap_len &amp;&amp;
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j &lt;&lt;= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] &lt;&lt; 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code &lt; D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s-&gt;pending) &lt; s-&gt;lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx &lt; s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n &lt; elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len &lt; 2) {
    node = s.heap[++s.heap_len] = (max_code &lt; 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len &gt;&gt; 1/*int /2*/); n &gt;= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] &gt;= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len &gt;= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n &lt;= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count &lt; max_count &amp;&amp; curlen === nextlen) {
      continue;

    } else if (count &lt; min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count &lt;= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n &lt;= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count &lt; max_count &amp;&amp; curlen === nextlen) {
      continue;

    } else if (count &lt; min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count &gt;= 3 &amp;&amp; count &lt;= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count &lt;= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex &gt;= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s-&gt;opt_len, s-&gt;static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes &gt;= 257, dcodes &gt;= 1, blcodes &gt;= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes &gt;= 257 &amp;&amp; dcodes &gt;= 1 &amp;&amp; blcodes &gt;= 4, "not enough codes");
  //Assert (lcodes &lt;= L_CODES &amp;&amp; dcodes &lt;= D_CODES &amp;&amp; blcodes &lt;= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank &lt; blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s-&gt;bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s-&gt;bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s-&gt;bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n &lt;= 31; n++, black_mask &gt;&gt;&gt;= 1) {
    if ((black_mask &amp; 1) &amp;&amp; (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n &lt; LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK &lt;&lt; 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES &lt;&lt; 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level &gt; 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s-&gt;opt_len,
    //        s-&gt;static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s-&gt;opt_len,
    //        s-&gt;static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) &gt;&gt;&gt; 3;
    static_lenb = (s.static_len + 3 + 7) &gt;&gt;&gt; 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s-&gt;opt_len, static_lenb, s-&gt;static_len, stored_len,
    //        s-&gt;last_lit));

    if (static_lenb &lt;= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 &lt;= opt_lenb) &amp;&amp; (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE &gt; WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE &lt;= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES &lt;&lt; 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES &lt;&lt; 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s-&gt;compressed_len == s-&gt;bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s-&gt;compressed_len&gt;&gt;3,
  //       s-&gt;compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist &gt;&gt;&gt; 8) &amp; 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist &amp; 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc &amp; 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist &lt; (ush)MAX_DIST(s) &amp;&amp;
    //       (ush)lc &lt;= (ush)(MAX_MATCH-MIN_MATCH) &amp;&amp;
    //       (ush)d_code(dist) &lt; (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit &amp; 0x1fff) === 0 &amp;&amp; s.level &gt; 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode &lt; D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length &gt;&gt;&gt;= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s-&gt;last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches &lt; (s.last_lit&gt;&gt;1)/*int /2*/ &amp;&amp; out_length &lt; (in_length&gt;&gt;1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;

},{"../utils/common":32}],44:[function(_dereq_,module,exports){
'use strict';


function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;

},{}],45:[function(_dereq_,module,exports){
/**
 * lodash 3.2.0 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */
var root = _dereq_('lodash._root');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&amp;&lt;&gt;"'`]/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&amp;': '&amp;amp;',
  '&lt;': '&amp;lt;',
  '&gt;': '&amp;gt;',
  '"': '&amp;quot;',
  "'": '&amp;#39;',
  '`': '&amp;#96;'
};

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
function escapeHtmlChar(chr) {
  return htmlEscapes[chr];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = Symbol ? symbolProto.toString : undefined;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // =&gt; true
 *
 * _.isObjectLike([1, 2, 3]);
 * // =&gt; true
 *
 * _.isObjectLike(_.noop);
 * // =&gt; false
 *
 * _.isObjectLike(null);
 * // =&gt; false
 */
function isObjectLike(value) {
  return !!value &amp;&amp; typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // =&gt; true
 *
 * _.isSymbol('abc');
 * // =&gt; false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) &amp;&amp; objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // =&gt; ''
 *
 * _.toString(-0);
 * // =&gt; '-0'
 *
 * _.toString([1, 2, 3]);
 * // =&gt; '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return Symbol ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' &amp;&amp; (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts the characters "&amp;", "&lt;", "&gt;", '"', "'", and "\`" in `string` to
 * their corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the "&gt;" character is escaped for symmetry, characters like
 * "&gt;" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value.
 * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * Backticks are escaped because in IE &lt; 9, they can break out of
 * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
 * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
 * for more details.
 *
 * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
 * to reduce XSS vectors.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, &amp; pebbles');
 * // =&gt; 'fred, barney, &amp;amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string &amp;&amp; reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = escape;

},{"lodash._root":46}],46:[function(_dereq_,module,exports){
(function (global){
/**
 * lodash 3.0.1 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */

/** Used to determine if values are of the language type `Object`. */
var objectTypes = {
  'function': true,
  'object': true
};

/** Detect free variable `exports`. */
var freeExports = (objectTypes[typeof exports] &amp;&amp; exports &amp;&amp; !exports.nodeType)
  ? exports
  : undefined;

/** Detect free variable `module`. */
var freeModule = (objectTypes[typeof module] &amp;&amp; module &amp;&amp; !module.nodeType)
  ? module
  : undefined;

/** Detect free variable `global` from Node.js. */
var freeGlobal = checkGlobal(freeExports &amp;&amp; freeModule &amp;&amp; typeof global == 'object' &amp;&amp; global);

/** Detect free variable `self`. */
var freeSelf = checkGlobal(objectTypes[typeof self] &amp;&amp; self);

/** Detect free variable `window`. */
var freeWindow = checkGlobal(objectTypes[typeof window] &amp;&amp; window);

/** Detect `this` as the global object. */
var thisGlobal = checkGlobal(objectTypes[typeof this] &amp;&amp; this);

/**
 * Used as a reference to the global object.
 *
 * The `this` value is used if it's the global object to avoid Greasemonkey's
 * restricted `window` object, otherwise the `window` object is used.
 */
var root = freeGlobal ||
  ((freeWindow !== (thisGlobal &amp;&amp; thisGlobal.window)) &amp;&amp; freeWindow) ||
    freeSelf || thisGlobal || Function('return this')();

/**
 * Checks if `value` is a global object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
 */
function checkGlobal(value) {
  return (value &amp;&amp; value.Object === Object) ? value : null;
}

module.exports = root;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],47:[function(_dereq_,module,exports){
/**
 * lodash 3.3.2 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */
var arrayCopy = _dereq_('lodash._arraycopy'),
    arrayEach = _dereq_('lodash._arrayeach'),
    createAssigner = _dereq_('lodash._createassigner'),
    isArguments = _dereq_('lodash.isarguments'),
    isArray = _dereq_('lodash.isarray'),
    isPlainObject = _dereq_('lodash.isplainobject'),
    isTypedArray = _dereq_('lodash.istypedarray'),
    keys = _dereq_('lodash.keys'),
    toPlainObject = _dereq_('lodash.toplainobject');

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value &amp;&amp; typeof value == 'object';
}

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.merge` without support for argument juggling,
 * multiple sources, and `this` binding `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates values with source counterparts.
 * @returns {Object} Returns `object`.
 */
function baseMerge(object, source, customizer, stackA, stackB) {
  if (!isObject(object)) {
    return object;
  }
  var isSrcArr = isArrayLike(source) &amp;&amp; (isArray(source) || isTypedArray(source)),
      props = isSrcArr ? undefined : keys(source);

  arrayEach(props || source, function(srcValue, key) {
    if (props) {
      key = srcValue;
      srcValue = source[key];
    }
    if (isObjectLike(srcValue)) {
      stackA || (stackA = []);
      stackB || (stackB = []);
      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
    }
    else {
      var value = object[key],
          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
          isCommon = result === undefined;

      if (isCommon) {
        result = srcValue;
      }
      if ((result !== undefined || (isSrcArr &amp;&amp; !(key in object))) &amp;&amp;
          (isCommon || (result === result ? (result !== value) : (value === value)))) {
        object[key] = result;
      }
    }
  });
  return object;
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates values with source counterparts.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
  var length = stackA.length,
      srcValue = source[key];

  while (length--) {
    if (stackA[length] == srcValue) {
      object[key] = stackB[length];
      return;
    }
  }
  var value = object[key],
      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
      isCommon = result === undefined;

  if (isCommon) {
    result = srcValue;
    if (isArrayLike(srcValue) &amp;&amp; (isArray(srcValue) || isTypedArray(srcValue))) {
      result = isArray(value)
        ? value
        : (isArrayLike(value) ? arrayCopy(value) : []);
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      result = isArguments(value)
        ? toPlainObject(value)
        : (isPlainObject(value) ? value : {});
    }
    else {
      isCommon = false;
    }
  }
  // Add the source value to the stack of traversed objects and associate
  // it with its merged value.
  stackA.push(srcValue);
  stackB.push(result);

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
  } else if (result === result ? (result !== value) : (value === value)) {
    object[key] = result;
  }
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null &amp;&amp; isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' &amp;&amp; value &gt; -1 &amp;&amp; value % 1 == 0 &amp;&amp; value &lt;= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // =&gt; true
 *
 * _.isObject([1, 2, 3]);
 * // =&gt; true
 *
 * _.isObject(1);
 * // =&gt; false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value &amp;&amp; (type == 'object' || type == 'function');
}

/**
 * Recursively merges own enumerable properties of the source object(s), that
 * don't resolve to `undefined` into the destination object. Subsequent sources
 * overwrite property assignments of previous sources. If `customizer` is
 * provided it is invoked to produce the merged values of the destination and
 * source properties. If `customizer` returns `undefined` merging is handled
 * by the method instead. The `customizer` is bound to `thisArg` and invoked
 * with five arguments: (objectValue, sourceValue, key, object, source).
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {*} [thisArg] The `this` binding of `customizer`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var users = {
 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
 * };
 *
 * var ages = {
 *   'data': [{ 'age': 36 }, { 'age': 40 }]
 * };
 *
 * _.merge(users, ages);
 * // =&gt; { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
 *
 * // using a customizer callback
 * var object = {
 *   'fruits': ['apple'],
 *   'vegetables': ['beet']
 * };
 *
 * var other = {
 *   'fruits': ['banana'],
 *   'vegetables': ['carrot']
 * };
 *
 * _.merge(object, other, function(a, b) {
 *   if (_.isArray(a)) {
 *     return a.concat(b);
 *   }
 * });
 * // =&gt; { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
 */
var merge = createAssigner(baseMerge);

module.exports = merge;

},{"lodash._arraycopy":48,"lodash._arrayeach":49,"lodash._createassigner":50,"lodash.isarguments":55,"lodash.isarray":56,"lodash.isplainobject":57,"lodash.istypedarray":59,"lodash.keys":60,"lodash.toplainobject":62}],48:[function(_dereq_,module,exports){
/**
 * lodash 3.0.0 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.7.0 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function arrayCopy(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index &lt; length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = arrayCopy;

},{}],49:[function(_dereq_,module,exports){
/**
 * lodash 3.0.0 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.7.0 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */

/**
 * A specialized version of `_.forEach` for arrays without support for callback
 * shorthands or `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array.length;

  while (++index &lt; length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

},{}],50:[function(_dereq_,module,exports){
/**
 * lodash 3.1.1 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */
var bindCallback = _dereq_('lodash._bindcallback'),
    isIterateeCall = _dereq_('lodash._isiterateecall'),
    restParam = _dereq_('lodash.restparam');

/**
 * Creates a function that assigns properties of source object(s) to a given
 * destination object.
 *
 * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return restParam(function(object, sources) {
    var index = -1,
        length = object == null ? 0 : sources.length,
        customizer = length &gt; 2 ? sources[length - 2] : undefined,
        guard = length &gt; 2 ? sources[2] : undefined,
        thisArg = length &gt; 1 ? sources[length - 1] : undefined;

    if (typeof customizer == 'function') {
      customizer = bindCallback(customizer, thisArg, 5);
      length -= 2;
    } else {
      customizer = typeof thisArg == 'function' ? thisArg : undefined;
      length -= (customizer ? 1 : 0);
    }
    if (guard &amp;&amp; isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length &lt; 3 ? undefined : customizer;
      length = 1;
    }
    while (++index &lt; length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

},{"lodash._bindcallback":51,"lodash._isiterateecall":52,"lodash.restparam":53}],51:[function(_dereq_,module,exports){
/**
 * lodash 3.0.1 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // =&gt; true
 */
function identity(value) {
  return value;
}

module.exports = bindCallback;

},{}],52:[function(_dereq_,module,exports){
/**
 * lodash 3.0.9 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/**
 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null &amp;&amp; isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value &gt; -1 &amp;&amp; value % 1 == 0 &amp;&amp; value &lt; length;
}

/**
 * Checks if the provided arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
      ? (isArrayLike(object) &amp;&amp; isIndex(index, object.length))
      : (type == 'string' &amp;&amp; index in object)) {
    var other = object[index];
    return value === value ? (value === other) : (other !== other);
  }
  return false;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' &amp;&amp; value &gt; -1 &amp;&amp; value % 1 == 0 &amp;&amp; value &lt;= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // =&gt; true
 *
 * _.isObject([1, 2, 3]);
 * // =&gt; true
 *
 * _.isObject(1);
 * // =&gt; false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value &amp;&amp; (type == 'object' || type == 'function');
}

module.exports = isIterateeCall;

},{}],53:[function(_dereq_,module,exports){
/**
 * lodash 3.6.1 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array.
 *
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.restParam(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) &gt; 1 ? ', &amp; ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // =&gt; 'hello fred, barney, &amp; pebbles'
 */
function restParam(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        rest = Array(length);

    while (++index &lt; length) {
      rest[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, args[0], rest);
      case 2: return func.call(this, args[0], args[1], rest);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index &lt; start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = rest;
    return func.apply(this, otherArgs);
  };
}

module.exports = restParam;

},{}],54:[function(_dereq_,module,exports){
/**
 * lodash 3.9.1 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari &gt; 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value &amp;&amp; typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&amp;')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // =&gt; true
 *
 * _.isFunction(/abc/);
 * // =&gt; false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) &amp;&amp; objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // =&gt; true
 *
 * _.isObject([1, 2, 3]);
 * // =&gt; true
 *
 * _.isObject(1);
 * // =&gt; false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value &amp;&amp; (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // =&gt; true
 *
 * _.isNative(_);
 * // =&gt; false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) &amp;&amp; reIsHostCtor.test(value);
}

module.exports = getNative;

},{}],55:[function(_dereq_,module,exports){
/**
 * lodash 3.0.8 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // =&gt; true
 *
 * _.isArguments([1, 2, 3]);
 * // =&gt; false
 */
function isArguments(value) {
  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) &amp;&amp; hasOwnProperty.call(value, 'callee') &amp;&amp;
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // =&gt; true
 *
 * _.isArrayLike(document.body.children);
 * // =&gt; true
 *
 * _.isArrayLike('abc');
 * // =&gt; true
 *
 * _.isArrayLike(_.noop);
 * // =&gt; false
 */
function isArrayLike(value) {
  return value != null &amp;&amp; isLength(getLength(value)) &amp;&amp; !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // =&gt; true
 *
 * _.isArrayLikeObject(document.body.children);
 * // =&gt; true
 *
 * _.isArrayLikeObject('abc');
 * // =&gt; false
 *
 * _.isArrayLikeObject(_.noop);
 * // =&gt; false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) &amp;&amp; isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // =&gt; true
 *
 * _.isFunction(/abc/);
 * // =&gt; false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8 which returns 'object' for typed array and weak map constructors,
  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // =&gt; true
 *
 * _.isLength(Number.MIN_VALUE);
 * // =&gt; false
 *
 * _.isLength(Infinity);
 * // =&gt; false
 *
 * _.isLength('3');
 * // =&gt; false
 */
function isLength(value) {
  return typeof value == 'number' &amp;&amp;
    value &gt; -1 &amp;&amp; value % 1 == 0 &amp;&amp; value &lt;= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // =&gt; true
 *
 * _.isObject([1, 2, 3]);
 * // =&gt; true
 *
 * _.isObject(_.noop);
 * // =&gt; true
 *
 * _.isObject(null);
 * // =&gt; false
 */
function isObject(value) {
  var type = typeof value;
  return !!value &amp;&amp; (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // =&gt; true
 *
 * _.isObjectLike([1, 2, 3]);
 * // =&gt; true
 *
 * _.isObjectLike(_.noop);
 * // =&gt; false
 *
 * _.isObjectLike(null);
 * // =&gt; false
 */
function isObjectLike(value) {
  return !!value &amp;&amp; typeof value == 'object';
}

module.exports = isArguments;

},{}],56:[function(_dereq_,module,exports){
/**
 * lodash 3.0.4 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari &gt; 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value &amp;&amp; typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&amp;')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' &amp;&amp; value &gt; -1 &amp;&amp; value % 1 == 0 &amp;&amp; value &lt;= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // =&gt; true
 *
 * _.isArray(function() { return arguments; }());
 * // =&gt; false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) &amp;&amp; isLength(value.length) &amp;&amp; objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // =&gt; true
 *
 * _.isFunction(/abc/);
 * // =&gt; false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) &amp;&amp; objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // =&gt; true
 *
 * _.isObject([1, 2, 3]);
 * // =&gt; true
 *
 * _.isObject(1);
 * // =&gt; false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value &amp;&amp; (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // =&gt; true
 *
 * _.isNative(_);
 * // =&gt; false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) &amp;&amp; reIsHostCtor.test(value);
}

module.exports = isArray;

},{}],57:[function(_dereq_,module,exports){
/**
 * lodash 3.2.0 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */
var baseFor = _dereq_('lodash._basefor'),
    isArguments = _dereq_('lodash.isarguments'),
    keysIn = _dereq_('lodash.keysin');

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value &amp;&amp; typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * The base implementation of `_.forIn` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForIn(object, iteratee) {
  return baseFor(object, iteratee, keysIn);
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * **Note:** This method assumes objects created by the `Object` constructor
 * have no inherited enumerable properties.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // =&gt; false
 *
 * _.isPlainObject([1, 2, 3]);
 * // =&gt; false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // =&gt; true
 *
 * _.isPlainObject(Object.create(null));
 * // =&gt; true
 */
function isPlainObject(value) {
  var Ctor;

  // Exit early for non `Object` objects.
  if (!(isObjectLike(value) &amp;&amp; objToString.call(value) == objectTag &amp;&amp; !isArguments(value)) ||
      (!hasOwnProperty.call(value, 'constructor') &amp;&amp; (Ctor = value.constructor, typeof Ctor == 'function' &amp;&amp; !(Ctor instanceof Ctor)))) {
    return false;
  }
  // IE &lt; 9 iterates inherited properties before own properties. If the first
  // iterated property is an object's own property then there are no inherited
  // enumerable properties.
  var result;
  // In most environments an object's own properties are iterated before
  // its inherited properties. If the last iterated property is an object's
  // own property then there are no inherited enumerable properties.
  baseForIn(value, function(subValue, key) {
    result = key;
  });
  return result === undefined || hasOwnProperty.call(value, result);
}

module.exports = isPlainObject;

},{"lodash._basefor":58,"lodash.isarguments":55,"lodash.keysin":61}],58:[function(_dereq_,module,exports){
/**
 * lodash 3.0.3 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */

/**
 * The base implementation of `baseForIn` and `baseForOwn` which iterates
 * over `object` properties returned by `keysFunc` invoking `iteratee` for
 * each property. Iteratee functions may exit iteration early by explicitly
 * returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * Creates a base function for methods like `_.forIn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = baseFor;

},{}],59:[function(_dereq_,module,exports){
/**
 * lodash 3.0.6 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors &lt;https://jquery.org/&gt;
 * Released under MIT license &lt;https://lodash.com/license&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length,
 *  else `false`.
 * @example
 *
 * _.isLength(3);
 * // =&gt; true
 *
 * _.isLength(Number.MIN_VALUE);
 * // =&gt; false
 *
 * _.isLength(Infinity);
 * // =&gt; false
 *
 * _.isLength('3');
 * // =&gt; false
 */
function isLength(value) {
  return typeof value == 'number' &amp;&amp;
    value &gt; -1 &amp;&amp; value % 1 == 0 &amp;&amp; value &lt;= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // =&gt; true
 *
 * _.isObjectLike([1, 2, 3]);
 * // =&gt; true
 *
 * _.isObjectLike(_.noop);
 * // =&gt; false
 *
 * _.isObjectLike(null);
 * // =&gt; false
 */
function isObjectLike(value) {
  return !!value &amp;&amp; typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // =&gt; true
 *
 * _.isTypedArray([]);
 * // =&gt; false
 */
function isTypedArray(value) {
  return isObjectLike(value) &amp;&amp;
    isLength(value.length) &amp;&amp; !!typedArrayTags[objectToString.call(value)];
}

module.exports = isTypedArray;

},{}],60:[function(_dereq_,module,exports){
/**
 * lodash 3.1.2 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */
var getNative = _dereq_('lodash._getnative'),
    isArguments = _dereq_('lodash.isarguments'),
    isArray = _dereq_('lodash.isarray');

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null &amp;&amp; isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value &gt; -1 &amp;&amp; value % 1 == 0 &amp;&amp; value &lt; length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' &amp;&amp; value &gt; -1 &amp;&amp; value % 1 == 0 &amp;&amp; value &lt;= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength &amp;&amp; object.length;

  var allowIndexes = !!length &amp;&amp; isLength(length) &amp;&amp;
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index &lt; propsLength) {
    var key = props[index];
    if ((allowIndexes &amp;&amp; isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // =&gt; true
 *
 * _.isObject([1, 2, 3]);
 * // =&gt; true
 *
 * _.isObject(1);
 * // =&gt; false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value &amp;&amp; (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // =&gt; ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // =&gt; ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' &amp;&amp; Ctor.prototype === object) ||
      (typeof object != 'function' &amp;&amp; isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // =&gt; ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length &amp;&amp; isLength(length) &amp;&amp;
    (isArray(object) || isArguments(object)) &amp;&amp; length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' &amp;&amp; Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length &gt; 0;

  while (++index &lt; length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes &amp;&amp; isIndex(key, length)) &amp;&amp;
        !(key == 'constructor' &amp;&amp; (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;

},{"lodash._getnative":54,"lodash.isarguments":55,"lodash.isarray":56}],61:[function(_dereq_,module,exports){
/**
 * lodash 3.0.8 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */
var isArguments = _dereq_('lodash.isarguments'),
    isArray = _dereq_('lodash.isarray');

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value &gt; -1 &amp;&amp; value % 1 == 0 &amp;&amp; value &lt; length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' &amp;&amp; value &gt; -1 &amp;&amp; value % 1 == 0 &amp;&amp; value &lt;= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // =&gt; true
 *
 * _.isObject([1, 2, 3]);
 * // =&gt; true
 *
 * _.isObject(1);
 * // =&gt; false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value &amp;&amp; (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // =&gt; ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length &amp;&amp; isLength(length) &amp;&amp;
    (isArray(object) || isArguments(object)) &amp;&amp; length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' &amp;&amp; Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length &gt; 0;

  while (++index &lt; length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes &amp;&amp; isIndex(key, length)) &amp;&amp;
        !(key == 'constructor' &amp;&amp; (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keysIn;

},{"lodash.isarguments":55,"lodash.isarray":56}],62:[function(_dereq_,module,exports){
/**
 * lodash 3.0.0 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.7.0 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */
var baseCopy = _dereq_('lodash._basecopy'),
    keysIn = _dereq_('lodash.keysin');

/**
 * Converts `value` to a plain object flattening inherited enumerable
 * properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // =&gt; { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // =&gt; { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return baseCopy(value, keysIn(value));
}

module.exports = toPlainObject;

},{"lodash._basecopy":63,"lodash.keysin":61}],63:[function(_dereq_,module,exports){
/**
 * lodash 3.0.1 (Custom Build) &lt;https://lodash.com/&gt;
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation &lt;http://dojofoundation.org/&gt;
 * Based on Underscore.js 1.8.3 &lt;http://underscorejs.org/LICENSE&gt;
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
 * Available under MIT license &lt;https://lodash.com/license&gt;
 */

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property names to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @returns {Object} Returns `object`.
 */
function baseCopy(source, props, object) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index &lt; length) {
    var key = props[index];
    object[key] = source[key];
  }
  return object;
}

module.exports = baseCopy;

},{}],64:[function(_dereq_,module,exports){
var JSZip, fs, internal;

JSZip = _dereq_('jszip');

internal = _dereq_('./internal');



module.exports = {
  asBlob: function(html, options) {
    var zip;
    zip = new JSZip();
    internal.addFiles(zip, html, options);
    return internal.generateDocument(zip);
  }
};


},{"./internal":65,"jszip":14}],65:[function(_dereq_,module,exports){
(function (global,Buffer){
var documentTemplate, fs, utils, _;



documentTemplate = _dereq_('./templates/document');

utils = _dereq_('./utils');

_ = {
  merge: _dereq_('lodash.merge')
};

module.exports = {
  generateDocument: function(zip) {
    var buffer;
    buffer = zip.generate({
      type: 'arraybuffer'
    });
    if (global.Blob) {
      return new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      });
    } else if (global.Buffer) {
      return new Buffer(new Uint8Array(buffer));
    } else {
      throw new Error("Neither Blob nor Buffer are accessible in this environment. " + "Consider adding Blob.js shim");
    }
  },
  renderDocumentFile: function(documentOptions) {
    var templateData;
    if (documentOptions == null) {
      documentOptions = {};
    }
    templateData = _.merge({
      margins: {
        top: 1440,
        right: 1440,
        bottom: 1440,
        left: 1440,
        header: 720,
        footer: 720,
        gutter: 0
      }
    }, (function() {
      switch (documentOptions.orientation) {
        case 'landscape':
          return {
            height: 12240,
            width: 15840,
            orient: 'landscape'
          };
        default:
          return {
            width: 12240,
            height: 15840,
            orient: 'portrait'
          };
      }
    })(), {
      margins: documentOptions.margins
    });
    return documentTemplate(templateData);
  },
  addFiles: function(zip, htmlSource, documentOptions) {
    zip.file('[Content_Types].xml', Buffer("PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pgo8VHlwZXMgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9wYWNrYWdlLzIwMDYvY29udGVudC10eXBlcyI+CiAgPERlZmF1bHQgRXh0ZW5zaW9uPSJyZWxzIiBDb250ZW50VHlwZT0KICAgICJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtcGFja2FnZS5yZWxhdGlvbnNoaXBzK3htbCIgLz4KICA8T3ZlcnJpZGUgUGFydE5hbWU9Ii93b3JkL2RvY3VtZW50LnhtbCIgQ29udGVudFR5cGU9CiAgICAiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQubWFpbit4bWwiLz4KICA8T3ZlcnJpZGUgUGFydE5hbWU9Ii93b3JkL2FmY2h1bmsubWh0IiBDb250ZW50VHlwZT0ibWVzc2FnZS9yZmM4MjIiLz4KPC9UeXBlcz4K","base64"));
    zip.folder('_rels').file('.rels', Buffer("PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pgo8UmVsYXRpb25zaGlwcyB4bWxucz0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL3BhY2thZ2UvMjAwNi9yZWxhdGlvbnNoaXBzIj4KICA8UmVsYXRpb25zaGlwCiAgICAgIFR5cGU9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9vZmZpY2VEb2N1bWVudC8yMDA2L3JlbGF0aW9uc2hpcHMvb2ZmaWNlRG9jdW1lbnQiCiAgICAgIFRhcmdldD0iL3dvcmQvZG9jdW1lbnQueG1sIiBJZD0iUjA5YzgzZmFmYzA2NzQ4OGUiIC8+CjwvUmVsYXRpb25zaGlwcz4K","base64"));
    return zip.folder('word').file('document.xml', this.renderDocumentFile(documentOptions)).file('afchunk.mht', utils.getMHTdocument(htmlSource)).folder('_rels').file('document.xml.rels', Buffer("PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pgo8UmVsYXRpb25zaGlwcyB4bWxucz0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL3BhY2thZ2UvMjAwNi9yZWxhdGlvbnNoaXBzIj4KICA8UmVsYXRpb25zaGlwIFR5cGU9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9vZmZpY2VEb2N1bWVudC8yMDA2L3JlbGF0aW9uc2hpcHMvYUZDaHVuayIKICAgIFRhcmdldD0iL3dvcmQvYWZjaHVuay5taHQiIElkPSJodG1sQ2h1bmsiIC8+CjwvUmVsYXRpb25zaGlwcz4K","base64"));
  }
};


}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer)
},{"./templates/document":66,"./utils":69,"buffer":1,"lodash.merge":47}],66:[function(_dereq_,module,exports){
var _ = {escape: _dereq_("lodash.escape")};
module.exports = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;\n&lt;w:document\n  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"\n  xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"\n  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"\n  xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"\n  xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"\n  xmlns:ns6="http://schemas.openxmlformats.org/schemaLibrary/2006/main"\n  xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart"\n  xmlns:ns8="http://schemas.openxmlformats.org/drawingml/2006/chartDrawing"\n  xmlns:dgm="http://schemas.openxmlformats.org/drawingml/2006/diagram"\n  xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"\n  xmlns:ns11="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"\n  xmlns:dsp="http://schemas.microsoft.com/office/drawing/2008/diagram"\n  xmlns:ns13="urn:schemas-microsoft-com:office:excel"\n  xmlns:o="urn:schemas-microsoft-com:office:office"\n  xmlns:v="urn:schemas-microsoft-com:vml"\n  xmlns:w10="urn:schemas-microsoft-com:office:word"\n  xmlns:ns17="urn:schemas-microsoft-com:office:powerpoint"\n  xmlns:odx="http://opendope.org/xpaths"\n  xmlns:odc="http://opendope.org/conditions"\n  xmlns:odq="http://opendope.org/questions"\n  xmlns:odi="http://opendope.org/components"\n  xmlns:odgm="http://opendope.org/SmartArt/DataHierarchy"\n  xmlns:ns24="http://schemas.openxmlformats.org/officeDocument/2006/bibliography"\n  xmlns:ns25="http://schemas.openxmlformats.org/drawingml/2006/compatibility"\n  xmlns:ns26="http://schemas.openxmlformats.org/drawingml/2006/lockedCanvas"&gt;\n  &lt;w:body&gt;\n    &lt;w:altChunk r:id="htmlChunk" /&gt;\n    &lt;w:sectPr&gt;\n      &lt;w:pgSz w:w="'+
((__t=( width ))==null?'':__t)+
'" w:h="'+
((__t=( height ))==null?'':__t)+
'" w:orient="'+
((__t=( orient ))==null?'':__t)+
'" /&gt;\n      &lt;w:pgMar w:top="'+
((__t=( margins.top ))==null?'':__t)+
'"\n               w:right="'+
((__t=( margins.right ))==null?'':__t)+
'"\n               w:bottom="'+
((__t=( margins.bottom ))==null?'':__t)+
'"\n               w:left="'+
((__t=( margins.left ))==null?'':__t)+
'"\n               w:header="'+
((__t=( margins.header ))==null?'':__t)+
'"\n               w:footer="'+
((__t=( margins.footer ))==null?'':__t)+
'"\n               w:gutter="'+
((__t=( margins.gutter ))==null?'':__t)+
'"/&gt;\n    &lt;/w:sectPr&gt;\n  &lt;/w:body&gt;\n&lt;/w:document&gt;\n';
}
return __p;
};

},{"lodash.escape":45}],67:[function(_dereq_,module,exports){
var _ = {escape: _dereq_("lodash.escape")};
module.exports = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='MIME-Version: 1.0\nContent-Type: multipart/related;\n    type="text/html";\n    boundary="----=mhtDocumentPart"\n\n\n------=mhtDocumentPart\nContent-Type: text/html;\n    charset="utf-8"\nContent-Transfer-Encoding: quoted-printable\nContent-Location: file:///C:/fake/document.html\n\n'+
((__t=( htmlSource ))==null?'':__t)+
'\n\n'+
((__t=( contentParts ))==null?'':__t)+
'\n\n------=mhtDocumentPart--\n';
}
return __p;
};

},{"lodash.escape":45}],68:[function(_dereq_,module,exports){
var _ = {escape: _dereq_("lodash.escape")};
module.exports = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='------=mhtDocumentPart\nContent-Type: '+
((__t=( contentType ))==null?'':__t)+
'\nContent-Transfer-Encoding: '+
((__t=( contentEncoding ))==null?'':__t)+
'\nContent-Location: '+
((__t=( contentLocation ))==null?'':__t)+
'\n\n'+
((__t=( encodedContent ))==null?'':__t)+
'\n';
}
return __p;
};

},{"lodash.escape":45}],69:[function(_dereq_,module,exports){
var mhtDocumentTemplate, mhtPartTemplate;

mhtDocumentTemplate = _dereq_('./templates/mht_document');

mhtPartTemplate = _dereq_('./templates/mht_part');

module.exports = {
  getMHTdocument: function(htmlSource) {
    var imageContentParts, _ref;
    _ref = this._prepareImageParts(htmlSource), htmlSource = _ref.htmlSource, imageContentParts = _ref.imageContentParts;
    htmlSource = htmlSource.replace(/\=/g, '=3D');
    return mhtDocumentTemplate({
      htmlSource: htmlSource,
      contentParts: imageContentParts.join('\n')
    });
  },
  _prepareImageParts: function(htmlSource) {
    var imageContentParts, inlinedReplacer, inlinedSrcPattern;
    imageContentParts = [];
    inlinedSrcPattern = /"data:(\w+\/\w+);(\w+),(\S+)"/g;
    inlinedReplacer = function(match, contentType, contentEncoding, encodedContent) {
      var contentLocation, extension, index;
      index = imageContentParts.length;
      extension = contentType.split('/')[1];
      contentLocation = "file:///C:/fake/image" + index + "." + extension;
      imageContentParts.push(mhtPartTemplate({
        contentType: contentType,
        contentEncoding: contentEncoding,
        contentLocation: contentLocation,
        encodedContent: encodedContent
      }));
      return "\"" + contentLocation + "\"";
    };
    if (typeof htmlSource === 'string') {
      if (!/&lt;img/g.test(htmlSource)) {
        return {
          htmlSource: htmlSource,
          imageContentParts: imageContentParts
        };
      }
      htmlSource = htmlSource.replace(inlinedSrcPattern, inlinedReplacer);
      return {
        htmlSource: htmlSource,
        imageContentParts: imageContentParts
      };
    } else {
      throw new Error("Not a valid source provided!");
    }
  }
};


},{"./templates/mht_document":67,"./templates/mht_part":68}]},{},[64])
(64)
});</textarea><button hidden="" data-testid="" data-hotkey="Alt+F1,Control+Alt+˙,Control+Alt+h" data-hotkey-scope="read-only-cursor-text-area"></button><div class="Box-sc-62in7e-0 cZXDgG"><div class="Box-sc-62in7e-0 cUUYDl react-code-line-container" tabindex="0"><div class="Box-sc-62in7e-0 yDIGu react-code-file-contents" role="presentation" aria-hidden="true" data-tab-size="4" data-testid="code-lines-container" data-paste-markdown-skip="true" data-hpc="true" style="height: 264320px;"><div class="react-line-numbers" style="pointer-events: auto; height: 264320px; position: relative; z-index: 2;"><div data-line-number="1" class="react-line-number react-code-text" style="padding-right: 16px;">1</div><div data-line-number="2" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(20px);">2</div><div data-line-number="3" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(40px);">3</div><div data-line-number="4" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(60px);">4</div><div data-line-number="5" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(80px);">5</div><div data-line-number="6" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(100px);">6</div><div data-line-number="7" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(120px);">7</div><div data-line-number="8" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(140px);">8</div><div data-line-number="9" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(160px);">9</div><div data-line-number="10" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(180px);">10</div><div data-line-number="11" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(200px);">11</div><div data-line-number="12" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(220px);">12</div><div data-line-number="13" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(240px);">13</div><div data-line-number="14" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(260px);">14</div><div data-line-number="15" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(280px);">15</div><div data-line-number="16" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(300px);">16</div><div data-line-number="17" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(320px);">17</div><div data-line-number="18" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(340px);">18</div><div data-line-number="19" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(360px);">19</div><div data-line-number="20" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(380px);">20</div><div data-line-number="21" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(400px);">21</div><div data-line-number="22" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(420px);">22</div><div data-line-number="23" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(440px);">23</div><div data-line-number="24" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(460px);">24</div><div data-line-number="25" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(480px);">25</div><div data-line-number="26" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(500px);">26</div><div data-line-number="27" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(520px);">27</div><div data-line-number="28" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(540px);">28</div><div data-line-number="29" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(560px);">29</div><div data-line-number="30" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(580px);">30</div><div data-line-number="31" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(600px);">31</div><div data-line-number="32" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(620px);">32</div><div data-line-number="33" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(640px);">33</div><div data-line-number="34" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(660px);">34</div><div data-line-number="35" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(680px);">35</div><div data-line-number="36" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(700px);">36</div><div data-line-number="37" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(720px);">37</div><div data-line-number="38" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(740px);">38</div><div data-line-number="39" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(760px);">39</div><div data-line-number="40" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(780px);">40</div><div data-line-number="41" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(800px);">41</div><div data-line-number="42" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(820px);">42</div><div data-line-number="43" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(840px);">43</div><div data-line-number="44" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(860px);">44</div><div data-line-number="45" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(880px);">45</div><div data-line-number="46" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(900px);">46</div><div data-line-number="47" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(920px);">47</div><div data-line-number="48" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(940px);">48</div><div data-line-number="49" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(960px);">49</div><div data-line-number="50" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(980px);">50</div><div data-line-number="51" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1000px);">51</div><div data-line-number="52" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1020px);">52</div><div data-line-number="53" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1040px);">53</div><div data-line-number="54" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1060px);">54</div><div data-line-number="55" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1080px);">55</div><div data-line-number="56" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1100px);">56</div><div data-line-number="57" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1120px);">57</div><div data-line-number="58" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1140px);">58</div><div data-line-number="59" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1160px);">59</div><div data-line-number="60" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1180px);">60</div><div data-line-number="61" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1200px);">61</div><div data-line-number="62" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1220px);">62</div><div data-line-number="63" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1240px);">63</div><div data-line-number="64" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1260px);">64</div><div data-line-number="65" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1280px);">65</div><div data-line-number="66" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1300px);">66</div><div data-line-number="67" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1320px);">67<span class="Box-sc-62in7e-0 gTgIBo"><div aria-label="Collapse code section" role="button" class="Box-sc-62in7e-0 bzYYiL"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="68" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1340px);">68</div><div data-line-number="69" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1360px);">69</div><div data-line-number="70" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1380px);">70</div><div data-line-number="71" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1400px);">71</div><div data-line-number="72" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1420px);">72</div><div data-line-number="73" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1440px);">73</div><div data-line-number="74" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1460px);">74</div><div data-line-number="75" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1480px);">75</div><div data-line-number="76" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1500px);">76</div><div data-line-number="77" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1520px);">77</div><div data-line-number="78" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1540px);">78</div><div data-line-number="79" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1560px);">79</div><div data-line-number="80" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1580px);">80</div><div data-line-number="81" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1600px);">81</div><div data-line-number="82" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1620px);">82</div><div data-line-number="83" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1640px);">83</div><div data-line-number="84" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1660px);">84</div><div data-line-number="85" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1680px);">85</div><div data-line-number="86" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1700px);">86</div><div data-line-number="87" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1720px);">87</div><div data-line-number="88" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1740px);">88</div><div data-line-number="89" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1760px);">89</div><div data-line-number="90" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1780px);">90</div><div data-line-number="91" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1800px);">91</div><div data-line-number="92" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1820px);">92</div><div data-line-number="93" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1840px);">93</div><div data-line-number="94" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1860px);">94</div><div data-line-number="95" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1880px);">95</div><div data-line-number="96" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1900px);">96</div><div data-line-number="97" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1920px);">97</div><div data-line-number="98" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1940px);">98</div><div data-line-number="99" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1960px);">99</div><div data-line-number="100" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1980px);">100</div><div data-line-number="101" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2000px);">101</div><div data-line-number="102" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2020px);">102</div><div data-line-number="103" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2040px);">103</div><div data-line-number="104" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2060px);">104</div><div data-line-number="105" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2080px);">105</div><div data-line-number="106" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2100px);">106</div><div data-line-number="107" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2120px);">107</div><div data-line-number="108" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2140px);">108</div><div data-line-number="109" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2160px);">109</div><div data-line-number="110" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2180px);">110</div><div data-line-number="111" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2200px);">111</div><div data-line-number="112" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2220px);">112</div><div data-line-number="113" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2240px);">113</div><div data-line-number="114" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2260px);">114</div><div data-line-number="115" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2280px);">115</div><div data-line-number="116" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2300px);">116</div><div data-line-number="117" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2320px);">117</div><div data-line-number="118" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2340px);">118</div><div data-line-number="119" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2360px);">119</div><div data-line-number="120" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2380px);">120</div><div data-line-number="121" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2400px);">121</div><div data-line-number="122" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2420px);">122</div><div data-line-number="123" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2440px);">123</div><div data-line-number="124" class="child-of-line-66  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2460px);">124</div><div data-line-number="125" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2480px);">125</div><div data-line-number="126" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2500px);">126</div><div data-line-number="127" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2520px);">127</div><div data-line-number="128" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2540px);">128</div><div data-line-number="129" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2560px);">129</div><div data-line-number="130" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2580px);">130</div><div data-line-number="131" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2600px);">131<span class="Box-sc-62in7e-0 gTgIBo"><div aria-label="Collapse code section" role="button" class="Box-sc-62in7e-0 bzYYiL"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="132" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2620px);">132</div><div data-line-number="133" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2640px);">133</div><div data-line-number="134" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2660px);">134</div><div data-line-number="135" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2680px);">135</div><div data-line-number="136" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2700px);">136</div><div data-line-number="137" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2720px);">137</div><div data-line-number="138" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2740px);">138</div><div data-line-number="139" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2760px);">139</div><div data-line-number="140" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2780px);">140</div><div data-line-number="141" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2800px);">141</div><div data-line-number="142" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2820px);">142</div><div data-line-number="143" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2840px);">143</div><div data-line-number="144" class="child-of-line-130  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2860px);">144</div><div data-line-number="145" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2880px);">145</div><div data-line-number="146" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2900px);">146</div><div data-line-number="147" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2920px);">147<span class="Box-sc-62in7e-0 gTgIBo"><div aria-label="Collapse code section" role="button" class="Box-sc-62in7e-0 bzYYiL"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="13143" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(262840px);">13143</div><div data-line-number="13144" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(262860px);">13144</div><div data-line-number="13145" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(262880px);">13145</div><div data-line-number="13146" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(262900px);">13146</div><div data-line-number="13147" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(262920px);">13147</div><div data-line-number="13148" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(262940px);">13148</div><div data-line-number="13149" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(262960px);">13149</div><div data-line-number="13150" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(262980px);">13150</div><div data-line-number="13151" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263000px);">13151</div><div data-line-number="13152" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263020px);">13152</div><div data-line-number="13153" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263040px);">13153</div><div data-line-number="13154" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263060px);">13154</div><div data-line-number="13155" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263080px);">13155</div><div data-line-number="13156" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263100px);">13156</div><div data-line-number="13157" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263120px);">13157</div><div data-line-number="13158" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263140px);">13158</div><div data-line-number="13159" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263160px);">13159</div><div data-line-number="13160" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263180px);">13160</div><div data-line-number="13161" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263200px);">13161</div><div data-line-number="13162" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263220px);">13162</div><div data-line-number="13163" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263240px);">13163</div><div data-line-number="13164" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263260px);">13164</div><div data-line-number="13165" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263280px);">13165</div><div data-line-number="13166" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263300px);">13166</div><div data-line-number="13167" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263320px);">13167</div><div data-line-number="13168" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263340px);">13168</div><div data-line-number="13169" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263360px);">13169<span class="Box-sc-62in7e-0 gTgIBo"><div aria-label="Collapse code section" role="button" class="Box-sc-62in7e-0 bzYYiL"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="13170" class="child-of-line-13168  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263380px);">13170</div><div data-line-number="13171" class="child-of-line-13168  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263400px);">13171</div><div data-line-number="13172" class="child-of-line-13168  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263420px);">13172</div><div data-line-number="13173" class="child-of-line-13168  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263440px);">13173</div><div data-line-number="13174" class="child-of-line-13168  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263460px);">13174</div><div data-line-number="13175" class="child-of-line-13168  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263480px);">13175</div><div data-line-number="13176" class="child-of-line-13168  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263500px);">13176</div><div data-line-number="13177" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263520px);">13177</div><div data-line-number="13178" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263540px);">13178<span class="Box-sc-62in7e-0 gTgIBo"><div aria-label="Collapse code section" role="button" class="Box-sc-62in7e-0 bzYYiL"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="13179" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263560px);">13179</div><div data-line-number="13180" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263580px);">13180</div><div data-line-number="13181" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263600px);">13181</div><div data-line-number="13182" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263620px);">13182<span class="Box-sc-62in7e-0 gTgIBo"><div aria-label="Collapse code section" role="button" class="Box-sc-62in7e-0 bzYYiL"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="13183" class="child-of-line-13177 child-of-line-13181  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263640px);">13183</div><div data-line-number="13184" class="child-of-line-13177 child-of-line-13181  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263660px);">13184</div><div data-line-number="13185" class="child-of-line-13177 child-of-line-13181  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263680px);">13185</div><div data-line-number="13186" class="child-of-line-13177 child-of-line-13181  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263700px);">13186</div><div data-line-number="13187" class="child-of-line-13177 child-of-line-13181  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263720px);">13187</div><div data-line-number="13188" class="child-of-line-13177 child-of-line-13181  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263740px);">13188</div><div data-line-number="13189" class="child-of-line-13177 child-of-line-13181  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263760px);">13189</div><div data-line-number="13190" class="child-of-line-13177 child-of-line-13181  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263780px);">13190</div><div data-line-number="13191" class="child-of-line-13177 child-of-line-13181  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263800px);">13191</div><div data-line-number="13192" class="child-of-line-13177 child-of-line-13181  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263820px);">13192</div><div data-line-number="13193" class="child-of-line-13177 child-of-line-13181  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263840px);">13193</div><div data-line-number="13194" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263860px);">13194</div><div data-line-number="13195" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263880px);">13195</div><div data-line-number="13196" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263900px);">13196</div><div data-line-number="13197" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263920px);">13197</div><div data-line-number="13198" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263940px);">13198</div><div data-line-number="13199" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263960px);">13199</div><div data-line-number="13200" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(263980px);">13200</div><div data-line-number="13201" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264000px);">13201</div><div data-line-number="13202" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264020px);">13202</div><div data-line-number="13203" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264040px);">13203</div><div data-line-number="13204" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264060px);">13204</div><div data-line-number="13205" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264080px);">13205</div><div data-line-number="13206" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264100px);">13206</div><div data-line-number="13207" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264120px);">13207</div><div data-line-number="13208" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264140px);">13208</div><div data-line-number="13209" class="child-of-line-13177  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264160px);">13209</div><div data-line-number="13210" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264180px);">13210</div><div data-line-number="13211" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264200px);">13211</div><div data-line-number="13212" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264220px);">13212</div><div data-line-number="13213" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264240px);">13213</div><div data-line-number="13214" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264260px);">13214</div><div data-line-number="13215" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264280px);">13215</div><div data-line-number="13216" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(264300px);">13216</div></div><div class="react-code-lines" style="height: 264320px;"><div data-key="0" class="react-code-text react-code-line-contents" style="min-height: auto;"><div><div id="LC1" class="react-file-line html-div" data-testid="code-cell" data-line-number="1" inert="" style="position: relative;"><span class="pl-c1">!</span><span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">e</span><span class="pl-kos">)</span><span class="pl-kos">{</span><span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-s">"object"</span><span class="pl-c1">==</span><span class="pl-k">typeof</span> <span class="pl-s1">exports</span><span class="pl-c1">&amp;&amp;</span><span class="pl-s">"undefined"</span><span class="pl-c1">!=</span><span class="pl-k">typeof</span> <span class="pl-smi">module</span><span class="pl-kos">)</span><span class="pl-smi">module</span><span class="pl-kos">.</span><span class="pl-c1">exports</span><span class="pl-c1">=</span><span class="pl-s1">e</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span><span class="pl-k">else</span> <span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-s">"function"</span><span class="pl-c1">==</span><span class="pl-k">typeof</span> <span class="pl-s1">define</span><span class="pl-c1">&amp;&amp;</span><span class="pl-s1">define</span><span class="pl-kos">.</span><span class="pl-c1">amd</span><span class="pl-kos">)</span><span class="pl-en">define</span><span class="pl-kos">(</span><span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">,</span><span class="pl-s1">e</span><span class="pl-kos">)</span><span class="pl-kos">;</span><span class="pl-k">else</span><span class="pl-kos">{</span><span class="pl-k">var</span> <span class="pl-s1">f</span><span class="pl-kos">;</span><span class="pl-s">"undefined"</span><span class="pl-c1">!=</span><span class="pl-k">typeof</span> <span class="pl-smi">window</span>?<span class="pl-s1">f</span><span class="pl-c1">=</span><span class="pl-smi">window</span>:<span class="pl-s">"undefined"</span><span class="pl-c1">!=</span><span class="pl-k">typeof</span> <span class="pl-s1">global</span>?<span class="pl-s1">f</span><span class="pl-c1">=</span><span class="pl-s1">global</span>:<span class="pl-s">"undefined"</span><span class="pl-c1">!=</span><span class="pl-k">typeof</span> <span class="pl-s1">self</span><span class="pl-c1">&amp;&amp;</span><span class="pl-kos">(</span><span class="pl-s1">f</span><span class="pl-c1">=</span><span class="pl-s1">self</span><span class="pl-kos">)</span><span class="pl-kos">,</span><span class="pl-s1">f</span><span class="pl-kos">.</span><span class="pl-c1">htmlDocx</span><span class="pl-c1">=</span><span class="pl-s1">e</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">}</span><span class="pl-kos">}</span><span class="pl-kos">(</span><span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">{</span><span class="pl-k">var</span> <span class="pl-s1">define</span><span class="pl-kos">,</span><span class="pl-s1">module</span><span class="pl-kos">,</span><span class="pl-s1">exports</span><span class="pl-kos">;</span><span class="pl-k">return</span> <span class="pl-kos">(</span><span class="pl-k">function</span> <span class="pl-en">e</span><span class="pl-kos">(</span><span class="pl-s1">t</span><span class="pl-kos">,</span><span class="pl-s1">n</span><span class="pl-kos">,</span><span class="pl-s1">r</span><span class="pl-kos">)</span><span class="pl-kos">{</span><span class="pl-k">function</span> <span class="pl-en">s</span><span class="pl-kos">(</span><span class="pl-s1">o</span><span class="pl-kos">,</span><span class="pl-s1">u</span><span class="pl-kos">)</span><span class="pl-kos">{</span><span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-s1">n</span><span class="pl-kos">[</span><span class="pl-s1">o</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos">{</span><span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-s1">t</span><span class="pl-kos">[</span><span class="pl-s1">o</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos">{</span><span class="pl-k">var</span> <span class="pl-s1">a</span><span class="pl-c1">=</span><span class="pl-k">typeof</span> <span class="pl-en">require</span><span class="pl-c1">==</span><span class="pl-s">"function"</span><span class="pl-c1">&amp;&amp;</span><span class="pl-en">require</span><span class="pl-kos">;</span><span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-s1">u</span><span class="pl-c1">&amp;&amp;</span><span class="pl-s1">a</span><span class="pl-kos">)</span><span class="pl-k">return</span> <span class="pl-s1">a</span><span class="pl-kos">(</span><span class="pl-s1">o</span><span class="pl-kos">,</span><span class="pl-c1">!</span><span class="pl-c1">0</span><span class="pl-kos">)</span><span class="pl-kos">;</span><span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-s1">i</span><span class="pl-kos">)</span><span class="pl-k">return</span> <span class="pl-en">i</span><span class="pl-kos">(</span><span class="pl-s1">o</span><span class="pl-kos">,</span><span class="pl-c1">!</span><span class="pl-c1">0</span><span class="pl-kos">)</span><span class="pl-kos">;</span><span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-v">Error</span><span class="pl-kos">(</span><span class="pl-s">"Cannot find module '"</span><span class="pl-c1">+</span><span class="pl-s1">o</span><span class="pl-c1">+</span><span class="pl-s">"'"</span><span class="pl-kos">)</span><span class="pl-kos">}</span><span class="pl-k">var</span> <span class="pl-s1">f</span><span class="pl-c1">=</span><span class="pl-s1">n</span><span class="pl-kos">[</span><span class="pl-s1">o</span><span class="pl-kos">]</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-c1">exports</span>:<span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">}</span><span class="pl-kos">;</span><span class="pl-s1">t</span><span class="pl-kos">[</span><span class="pl-s1">o</span><span class="pl-kos">]</span><span class="pl-kos">[</span><span class="pl-c1">0</span><span class="pl-kos">]</span><span class="pl-kos">.</span><span class="pl-en">call</span><span class="pl-kos">(</span><span class="pl-s1">f</span><span class="pl-kos">.</span><span class="pl-c1">exports</span><span class="pl-kos">,</span><span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">e</span><span class="pl-kos">)</span><span class="pl-kos">{</span><span class="pl-k">var</span> <span class="pl-s1">n</span><span class="pl-c1">=</span><span class="pl-s1">t</span><span class="pl-kos">[</span><span class="pl-s1">o</span><span class="pl-kos">]</span><span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">]</span><span class="pl-kos">[</span><span class="pl-s1">e</span><span class="pl-kos">]</span><span class="pl-kos">;</span><span class="pl-k">return</span> <span class="pl-en">s</span><span class="pl-kos">(</span><span class="pl-s1">n</span>?<span class="pl-s1">n</span>:<span class="pl-s1">e</span><span class="pl-kos">)</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-s1">f</span><span class="pl-kos">,</span><span class="pl-s1">f</span><span class="pl-kos">.</span><span class="pl-c1">exports</span><span class="pl-kos">,</span><span class="pl-s1">e</span><span class="pl-kos">,</span><span class="pl-s1">t</span><span class="pl-kos">,</span><span class="pl-s1">n</span><span class="pl-kos">,</span><span class="pl-s1">r</span><span class="pl-kos">)</span><span class="pl-kos">}</span><span class="pl-k">return</span> <span class="pl-s1">n</span><span class="pl-kos">[</span><span class="pl-s1">o</span><span class="pl-kos">]</span><span class="pl-kos">.</span><span class="pl-c1">exports</span><span class="pl-kos">}</span><span class="pl-k">var</span> <span class="pl-s1">i</span><span class="pl-c1">=</span><span class="pl-k">typeof</span> <span class="pl-en">require</span><span class="pl-c1">==</span><span class="pl-s">"function"</span><span class="pl-c1">&amp;&amp;</span><span class="pl-en">require</span><span class="pl-kos">;</span><span class="pl-k">for</span><span class="pl-kos">(</span><span class="pl-k">var</span> <span class="pl-s1">o</span><span class="pl-c1">=</span><span class="pl-c1">0</span><span class="pl-kos">;</span><span class="pl-s1">o</span><span class="pl-c1">&lt;</span><span class="pl-s1">r</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span><span class="pl-s1">o</span><span class="pl-c1">++</span><span class="pl-kos">)</span><span class="pl-en">s</span><span class="pl-kos">(</span><span class="pl-s1">r</span><span class="pl-kos">[</span><span class="pl-s1">o</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos">;</span><span class="pl-k">return</span> <span class="pl-s1">s</span><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">(</span><span class="pl-kos">{</span><span class="pl-c1">1</span>:<span class="pl-kos">[</span><span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">_dereq_</span><span class="pl-kos">,</span><span class="pl-s1">module</span><span class="pl-kos">,</span><span class="pl-s1">exports</span><span class="pl-kos">)</span><span class="pl-kos">{</span></div></div></div><div data-key="1" class="react-code-text react-code-line-contents virtual" style="transform: translateY(20px); min-height: auto;"><div><div id="LC2" class="react-file-line html-div" data-testid="code-cell" data-line-number="2" inert="" style="position: relative;"><span class="pl-c">/*!</span></div></div></div><div data-key="2" class="react-code-text react-code-line-contents virtual" style="transform: translateY(40px); min-height: auto;"><div><div id="LC3" class="react-file-line html-div" data-testid="code-cell" data-line-number="3" inert="" style="position: relative;"><span class="pl-c"> * The buffer module from node.js, for the browser.</span></div></div></div><div data-key="3" class="react-code-text react-code-line-contents virtual" style="transform: translateY(60px); min-height: auto;"><div><div id="LC4" class="react-file-line html-div" data-testid="code-cell" data-line-number="4" inert="" style="position: relative;"><span class="pl-c"> *</span></div></div></div><div data-key="4" class="react-code-text react-code-line-contents virtual" style="transform: translateY(80px); min-height: auto;"><div><div id="LC5" class="react-file-line html-div" data-testid="code-cell" data-line-number="5" inert="" style="position: relative;"><span class="pl-c"> * <span class="pl-k">@author</span>   Feross Aboukhadijeh &lt;feross@feross.org&gt; &lt;http://feross.org&gt;</span></div></div></div><div data-key="5" class="react-code-text react-code-line-contents virtual" style="transform: translateY(100px); min-height: auto;"><div><div id="LC6" class="react-file-line html-div" data-testid="code-cell" data-line-number="6" inert="" style="position: relative;"><span class="pl-c"> * <span class="pl-k">@license</span>  MIT</span></div></div></div><div data-key="6" class="react-code-text react-code-line-contents virtual" style="transform: translateY(120px); min-height: auto;"><div><div id="LC7" class="react-file-line html-div" data-testid="code-cell" data-line-number="7" inert="" style="position: relative;"><span class="pl-c"> */</span></div></div></div><div data-key="7" class="react-code-text react-code-line-contents virtual" style="transform: translateY(140px); min-height: auto;"><div><div id="LC8" class="react-file-line html-div" data-testid="code-cell" data-line-number="8" inert="" style="position: relative;">
</div></div></div><div data-key="8" class="react-code-text react-code-line-contents virtual" style="transform: translateY(160px); min-height: auto;"><div><div id="LC9" class="react-file-line html-div" data-testid="code-cell" data-line-number="9" inert="" style="position: relative;"><span class="pl-k">var</span> <span class="pl-s1">base64</span> <span class="pl-c1">=</span> <span class="pl-s1">_dereq_</span><span class="pl-kos">(</span><span class="pl-s">'base64-js'</span><span class="pl-kos">)</span></div></div></div><div data-key="9" class="react-code-text react-code-line-contents virtual" style="transform: translateY(180px); min-height: auto;"><div><div id="LC10" class="react-file-line html-div" data-testid="code-cell" data-line-number="10" inert="" style="position: relative;"><span class="pl-k">var</span> <span class="pl-s1">ieee754</span> <span class="pl-c1">=</span> <span class="pl-s1">_dereq_</span><span class="pl-kos">(</span><span class="pl-s">'ieee754'</span><span class="pl-kos">)</span></div></div></div><div data-key="10" class="react-code-text react-code-line-contents virtual" style="transform: translateY(200px); min-height: auto;"><div><div id="LC11" class="react-file-line html-div" data-testid="code-cell" data-line-number="11" inert="" style="position: relative;"><span class="pl-k">var</span> <span class="pl-s1">isArray</span> <span class="pl-c1">=</span> <span class="pl-s1">_dereq_</span><span class="pl-kos">(</span><span class="pl-s">'is-array'</span><span class="pl-kos">)</span></div></div></div><div data-key="11" class="react-code-text react-code-line-contents virtual" style="transform: translateY(220px); min-height: auto;"><div><div id="LC12" class="react-file-line html-div" data-testid="code-cell" data-line-number="12" inert="" style="position: relative;">
</div></div></div><div data-key="12" class="react-code-text react-code-line-contents virtual" style="transform: translateY(240px); min-height: auto;"><div><div id="LC13" class="react-file-line html-div" data-testid="code-cell" data-line-number="13" inert="" style="position: relative;"><span class="pl-s1">exports</span><span class="pl-kos">.</span><span class="pl-c1">Buffer</span> <span class="pl-c1">=</span> <span class="pl-v">Buffer</span></div></div></div><div data-key="13" class="react-code-text react-code-line-contents virtual" style="transform: translateY(260px); min-height: auto;"><div><div id="LC14" class="react-file-line html-div" data-testid="code-cell" data-line-number="14" inert="" style="position: relative;"><span class="pl-s1">exports</span><span class="pl-kos">.</span><span class="pl-c1">SlowBuffer</span> <span class="pl-c1">=</span> <span class="pl-v">Buffer</span></div></div></div><div data-key="14" class="react-code-text react-code-line-contents virtual" style="transform: translateY(280px); min-height: auto;"><div><div id="LC15" class="react-file-line html-div" data-testid="code-cell" data-line-number="15" inert="" style="position: relative;"><span class="pl-s1">exports</span><span class="pl-kos">.</span><span class="pl-c1">INSPECT_MAX_BYTES</span> <span class="pl-c1">=</span> <span class="pl-c1">50</span></div></div></div><div data-key="15" class="react-code-text react-code-line-contents virtual" style="transform: translateY(300px); min-height: auto;"><div><div id="LC16" class="react-file-line html-div" data-testid="code-cell" data-line-number="16" inert="" style="position: relative;"><span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-c1">poolSize</span> <span class="pl-c1">=</span> <span class="pl-c1">8192</span> <span class="pl-c">// not used by this implementation</span></div></div></div><div data-key="16" class="react-code-text react-code-line-contents virtual" style="transform: translateY(320px); min-height: auto;"><div><div id="LC17" class="react-file-line html-div" data-testid="code-cell" data-line-number="17" inert="" style="position: relative;">
</div></div></div><div data-key="17" class="react-code-text react-code-line-contents virtual" style="transform: translateY(340px); min-height: auto;"><div><div id="LC18" class="react-file-line html-div" data-testid="code-cell" data-line-number="18" inert="" style="position: relative;"><span class="pl-k">var</span> <span class="pl-s1">kMaxLength</span> <span class="pl-c1">=</span> <span class="pl-c1">0x3fffffff</span></div></div></div><div data-key="18" class="react-code-text react-code-line-contents virtual" style="transform: translateY(360px); min-height: auto;"><div><div id="LC19" class="react-file-line html-div" data-testid="code-cell" data-line-number="19" inert="" style="position: relative;">
</div></div></div><div data-key="19" class="react-code-text react-code-line-contents virtual" style="transform: translateY(380px); min-height: auto;"><div><div id="LC20" class="react-file-line html-div" data-testid="code-cell" data-line-number="20" inert="" style="position: relative;"><span class="pl-c">/**</span></div></div></div><div data-key="20" class="react-code-text react-code-line-contents virtual" style="transform: translateY(400px); min-height: auto;"><div><div id="LC21" class="react-file-line html-div" data-testid="code-cell" data-line-number="21" inert="" style="position: relative;"><span class="pl-c"> * If `Buffer.TYPED_ARRAY_SUPPORT`:</span></div></div></div><div data-key="21" class="react-code-text react-code-line-contents virtual" style="transform: translateY(420px); min-height: auto;"><div><div id="LC22" class="react-file-line html-div" data-testid="code-cell" data-line-number="22" inert="" style="position: relative;"><span class="pl-c"> *   === true    Use Uint8Array implementation (fastest)</span></div></div></div><div data-key="22" class="react-code-text react-code-line-contents virtual" style="transform: translateY(440px); min-height: auto;"><div><div id="LC23" class="react-file-line html-div" data-testid="code-cell" data-line-number="23" inert="" style="position: relative;"><span class="pl-c"> *   === false   Use Object implementation (most compatible, even IE6)</span></div></div></div><div data-key="23" class="react-code-text react-code-line-contents virtual" style="transform: translateY(460px); min-height: auto;"><div><div id="LC24" class="react-file-line html-div" data-testid="code-cell" data-line-number="24" inert="" style="position: relative;"><span class="pl-c"> *</span></div></div></div><div data-key="24" class="react-code-text react-code-line-contents virtual" style="transform: translateY(480px); min-height: auto;"><div><div id="LC25" class="react-file-line html-div" data-testid="code-cell" data-line-number="25" inert="" style="position: relative;"><span class="pl-c"> * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,</span></div></div></div><div data-key="25" class="react-code-text react-code-line-contents virtual" style="transform: translateY(500px); min-height: auto;"><div><div id="LC26" class="react-file-line html-div" data-testid="code-cell" data-line-number="26" inert="" style="position: relative;"><span class="pl-c"> * Opera 11.6+, iOS 4.2+.</span></div></div></div><div data-key="26" class="react-code-text react-code-line-contents virtual" style="transform: translateY(520px); min-height: auto;"><div><div id="LC27" class="react-file-line html-div" data-testid="code-cell" data-line-number="27" inert="" style="position: relative;"><span class="pl-c"> *</span></div></div></div><div data-key="27" class="react-code-text react-code-line-contents virtual" style="transform: translateY(540px); min-height: auto;"><div><div id="LC28" class="react-file-line html-div" data-testid="code-cell" data-line-number="28" inert="" style="position: relative;"><span class="pl-c"> * Note:</span></div></div></div><div data-key="28" class="react-code-text react-code-line-contents virtual" style="transform: translateY(560px); min-height: auto;"><div><div id="LC29" class="react-file-line html-div" data-testid="code-cell" data-line-number="29" inert="" style="position: relative;"><span class="pl-c"> *</span></div></div></div><div data-key="29" class="react-code-text react-code-line-contents virtual" style="transform: translateY(580px); min-height: auto;"><div><div id="LC30" class="react-file-line html-div" data-testid="code-cell" data-line-number="30" inert="" style="position: relative;"><span class="pl-c"> * - Implementation must support adding new properties to `Uint8Array` instances.</span></div></div></div><div data-key="30" class="react-code-text react-code-line-contents virtual" style="transform: translateY(600px); min-height: auto;"><div><div id="LC31" class="react-file-line html-div" data-testid="code-cell" data-line-number="31" inert="" style="position: relative;"><span class="pl-c"> *   Firefox 4-29 lacked support, fixed in Firefox 30+.</span></div></div></div><div data-key="31" class="react-code-text react-code-line-contents virtual" style="transform: translateY(620px); min-height: auto;"><div><div id="LC32" class="react-file-line html-div" data-testid="code-cell" data-line-number="32" inert="" style="position: relative;"><span class="pl-c"> *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.</span></div></div></div><div data-key="32" class="react-code-text react-code-line-contents virtual" style="transform: translateY(640px); min-height: auto;"><div><div id="LC33" class="react-file-line html-div" data-testid="code-cell" data-line-number="33" inert="" style="position: relative;"><span class="pl-c"> *</span></div></div></div><div data-key="33" class="react-code-text react-code-line-contents virtual" style="transform: translateY(660px); min-height: auto;"><div><div id="LC34" class="react-file-line html-div" data-testid="code-cell" data-line-number="34" inert="" style="position: relative;"><span class="pl-c"> *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.</span></div></div></div><div data-key="34" class="react-code-text react-code-line-contents virtual" style="transform: translateY(680px); min-height: auto;"><div><div id="LC35" class="react-file-line html-div" data-testid="code-cell" data-line-number="35" inert="" style="position: relative;"><span class="pl-c"> *</span></div></div></div><div data-key="35" class="react-code-text react-code-line-contents virtual" style="transform: translateY(700px); min-height: auto;"><div><div id="LC36" class="react-file-line html-div" data-testid="code-cell" data-line-number="36" inert="" style="position: relative;"><span class="pl-c"> *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of</span></div></div></div><div data-key="36" class="react-code-text react-code-line-contents virtual" style="transform: translateY(720px); min-height: auto;"><div><div id="LC37" class="react-file-line html-div" data-testid="code-cell" data-line-number="37" inert="" style="position: relative;"><span class="pl-c"> *    incorrect length in some situations.</span></div></div></div><div data-key="37" class="react-code-text react-code-line-contents virtual" style="transform: translateY(740px); min-height: auto;"><div><div id="LC38" class="react-file-line html-div" data-testid="code-cell" data-line-number="38" inert="" style="position: relative;"><span class="pl-c"> *</span></div></div></div><div data-key="38" class="react-code-text react-code-line-contents virtual" style="transform: translateY(760px); min-height: auto;"><div><div id="LC39" class="react-file-line html-div" data-testid="code-cell" data-line-number="39" inert="" style="position: relative;"><span class="pl-c"> * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will</span></div></div></div><div data-key="39" class="react-code-text react-code-line-contents virtual" style="transform: translateY(780px); min-height: auto;"><div><div id="LC40" class="react-file-line html-div" data-testid="code-cell" data-line-number="40" inert="" style="position: relative;"><span class="pl-c"> * get the Object implementation, which is slower but will work correctly.</span></div></div></div><div data-key="40" class="react-code-text react-code-line-contents virtual" style="transform: translateY(800px); min-height: auto;"><div><div id="LC41" class="react-file-line html-div" data-testid="code-cell" data-line-number="41" inert="" style="position: relative;"><span class="pl-c"> */</span></div></div></div><div data-key="41" class="react-code-text react-code-line-contents virtual" style="transform: translateY(820px); min-height: auto;"><div><div id="LC42" class="react-file-line html-div" data-testid="code-cell" data-line-number="42" inert="" style="position: relative;"><span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-c1">TYPED_ARRAY_SUPPORT</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="42" class="react-code-text react-code-line-contents virtual" style="transform: translateY(840px); min-height: auto;"><div><div id="LC43" class="react-file-line html-div" data-testid="code-cell" data-line-number="43" inert="" style="position: relative;">  <span class="pl-k">try</span> <span class="pl-kos">{</span></div></div></div><div data-key="43" class="react-code-text react-code-line-contents virtual" style="transform: translateY(860px); min-height: auto;"><div><div id="LC44" class="react-file-line html-div" data-testid="code-cell" data-line-number="44" inert="" style="position: relative;">    <span class="pl-k">var</span> <span class="pl-s1">buf</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-v">ArrayBuffer</span><span class="pl-kos">(</span><span class="pl-c1">0</span><span class="pl-kos">)</span></div></div></div><div data-key="44" class="react-code-text react-code-line-contents virtual" style="transform: translateY(880px); min-height: auto;"><div><div id="LC45" class="react-file-line html-div" data-testid="code-cell" data-line-number="45" inert="" style="position: relative;">    <span class="pl-k">var</span> <span class="pl-s1">arr</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-v">Uint8Array</span><span class="pl-kos">(</span><span class="pl-s1">buf</span><span class="pl-kos">)</span></div></div></div><div data-key="45" class="react-code-text react-code-line-contents virtual" style="transform: translateY(900px); min-height: auto;"><div><div id="LC46" class="react-file-line html-div" data-testid="code-cell" data-line-number="46" inert="" style="position: relative;">    <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">foo</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span> <span class="pl-k">return</span> <span class="pl-c1">42</span> <span class="pl-kos">}</span></div></div></div><div data-key="46" class="react-code-text react-code-line-contents virtual" style="transform: translateY(920px); min-height: auto;"><div><div id="LC47" class="react-file-line html-div" data-testid="code-cell" data-line-number="47" inert="" style="position: relative;">    <span class="pl-k">return</span> <span class="pl-c1">42</span> <span class="pl-c1">===</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">foo</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-c">// typed array instances can be augmented</span></div></div></div><div data-key="47" class="react-code-text react-code-line-contents virtual" style="transform: translateY(940px); min-height: auto;"><div><div id="LC48" class="react-file-line html-div" data-testid="code-cell" data-line-number="48" inert="" style="position: relative;">        <span class="pl-k">typeof</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">subarray</span> <span class="pl-c1">===</span> <span class="pl-s">'function'</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-c">// chrome 9-10 lack `subarray`</span></div></div></div><div data-key="48" class="react-code-text react-code-line-contents virtual" style="transform: translateY(960px); min-height: auto;"><div><div id="LC49" class="react-file-line html-div" data-testid="code-cell" data-line-number="49" inert="" style="position: relative;">        <span class="pl-k">new</span> <span class="pl-v">Uint8Array</span><span class="pl-kos">(</span><span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">subarray</span><span class="pl-kos">(</span><span class="pl-c1">1</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">byteLength</span> <span class="pl-c1">===</span> <span class="pl-c1">0</span> <span class="pl-c">// ie10 has broken `subarray`</span></div></div></div><div data-key="49" class="react-code-text react-code-line-contents virtual" style="transform: translateY(980px); min-height: auto;"><div><div id="LC50" class="react-file-line html-div" data-testid="code-cell" data-line-number="50" inert="" style="position: relative;">  <span class="pl-kos">}</span> <span class="pl-k">catch</span> <span class="pl-kos">(</span><span class="pl-s1">e</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="50" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1000px); min-height: auto;"><div><div id="LC51" class="react-file-line html-div" data-testid="code-cell" data-line-number="51" inert="" style="position: relative;">    <span class="pl-k">return</span> <span class="pl-c1">false</span></div></div></div><div data-key="51" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1020px); min-height: auto;"><div><div id="LC52" class="react-file-line html-div" data-testid="code-cell" data-line-number="52" inert="" style="position: relative;">  <span class="pl-kos">}</span></div></div></div><div data-key="52" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1040px); min-height: auto;"><div><div id="LC53" class="react-file-line html-div" data-testid="code-cell" data-line-number="53" inert="" style="position: relative;"><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">(</span><span class="pl-kos">)</span></div></div></div><div data-key="53" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1060px); min-height: auto;"><div><div id="LC54" class="react-file-line html-div" data-testid="code-cell" data-line-number="54" inert="" style="position: relative;">
</div></div></div><div data-key="54" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1080px); min-height: auto;"><div><div id="LC55" class="react-file-line html-div" data-testid="code-cell" data-line-number="55" inert="" style="position: relative;"><span class="pl-c">/**</span></div></div></div><div data-key="55" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1100px); min-height: auto;"><div><div id="LC56" class="react-file-line html-div" data-testid="code-cell" data-line-number="56" inert="" style="position: relative;"><span class="pl-c"> * Class: Buffer</span></div></div></div><div data-key="56" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1120px); min-height: auto;"><div><div id="LC57" class="react-file-line html-div" data-testid="code-cell" data-line-number="57" inert="" style="position: relative;"><span class="pl-c"> * =============</span></div></div></div><div data-key="57" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1140px); min-height: auto;"><div><div id="LC58" class="react-file-line html-div" data-testid="code-cell" data-line-number="58" inert="" style="position: relative;"><span class="pl-c"> *</span></div></div></div><div data-key="58" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1160px); min-height: auto;"><div><div id="LC59" class="react-file-line html-div" data-testid="code-cell" data-line-number="59" inert="" style="position: relative;"><span class="pl-c"> * The Buffer constructor returns instances of `Uint8Array` that are augmented</span></div></div></div><div data-key="59" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1180px); min-height: auto;"><div><div id="LC60" class="react-file-line html-div" data-testid="code-cell" data-line-number="60" inert="" style="position: relative;"><span class="pl-c"> * with function properties for all the node `Buffer` API functions. We use</span></div></div></div><div data-key="60" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1200px); min-height: auto;"><div><div id="LC61" class="react-file-line html-div" data-testid="code-cell" data-line-number="61" inert="" style="position: relative;"><span class="pl-c"> * `Uint8Array` so that square bracket notation works as expected -- it returns</span></div></div></div><div data-key="61" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1220px); min-height: auto;"><div><div id="LC62" class="react-file-line html-div" data-testid="code-cell" data-line-number="62" inert="" style="position: relative;"><span class="pl-c"> * a single octet.</span></div></div></div><div data-key="62" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1240px); min-height: auto;"><div><div id="LC63" class="react-file-line html-div" data-testid="code-cell" data-line-number="63" inert="" style="position: relative;"><span class="pl-c"> *</span></div></div></div><div data-key="63" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1260px); min-height: auto;"><div><div id="LC64" class="react-file-line html-div" data-testid="code-cell" data-line-number="64" inert="" style="position: relative;"><span class="pl-c"> * By augmenting the instances, we can avoid modifying the `Uint8Array`</span></div></div></div><div data-key="64" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1280px); min-height: auto;"><div><div id="LC65" class="react-file-line html-div" data-testid="code-cell" data-line-number="65" inert="" style="position: relative;"><span class="pl-c"> * prototype.</span></div></div></div><div data-key="65" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1300px); min-height: auto;"><div><div id="LC66" class="react-file-line html-div" data-testid="code-cell" data-line-number="66" inert="" style="position: relative;"><span class="pl-c"> */</span></div></div></div><div data-key="66" class="react-code-text react-code-line-contents virtual" style="transform: translateY(1320px); min-height: auto;"><div><div id="LC67" class="react-file-line html-div" data-testid="code-cell" data-line-number="67" inert="" style="position: relative;"><span class="pl-k">function</span> <span class="pl-v">Buffer</span> <span class="pl-kos">(</span><span class="pl-s1">subject</span><span class="pl-kos">,</span> <span class="pl-s1">encoding</span><span class="pl-kos">,</span> <span class="pl-s1">noZero</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="67" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1340px); min-height: auto;"><div><div id="LC68" class="react-file-line html-div" data-testid="code-cell" data-line-number="68" inert="" style="position: relative;">  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-kos">(</span><span class="pl-smi">this</span> <span class="pl-k">instanceof</span> <span class="pl-v">Buffer</span><span class="pl-kos">)</span><span class="pl-kos">)</span></div></div></div><div data-key="68" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1360px); min-height: auto;"><div><div id="LC69" class="react-file-line html-div" data-testid="code-cell" data-line-number="69" inert="" style="position: relative;">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-v">Buffer</span><span class="pl-kos">(</span><span class="pl-s1">subject</span><span class="pl-kos">,</span> <span class="pl-s1">encoding</span><span class="pl-kos">,</span> <span class="pl-s1">noZero</span><span class="pl-kos">)</span></div></div></div><div data-key="69" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1380px); min-height: auto;"><div><div id="LC70" class="react-file-line html-div" data-testid="code-cell" data-line-number="70" inert="" style="position: relative;">
</div></div></div><div data-key="70" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1400px); min-height: auto;"><div><div id="LC71" class="react-file-line html-div" data-testid="code-cell" data-line-number="71" inert="" style="position: relative;">  <span class="pl-k">var</span> <span class="pl-s1">type</span> <span class="pl-c1">=</span> <span class="pl-k">typeof</span> <span class="pl-s1">subject</span></div></div></div><div data-key="71" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1420px); min-height: auto;"><div><div id="LC72" class="react-file-line html-div" data-testid="code-cell" data-line-number="72" inert="" style="position: relative;">
</div></div></div><div data-key="72" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1440px); min-height: auto;"><div><div id="LC73" class="react-file-line html-div" data-testid="code-cell" data-line-number="73" inert="" style="position: relative;">  <span class="pl-c">// Find the length</span></div></div></div><div data-key="73" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1460px); min-height: auto;"><div><div id="LC74" class="react-file-line html-div" data-testid="code-cell" data-line-number="74" inert="" style="position: relative;">  <span class="pl-k">var</span> <span class="pl-s1">length</span></div></div></div><div data-key="74" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1480px); min-height: auto;"><div><div id="LC75" class="react-file-line html-div" data-testid="code-cell" data-line-number="75" inert="" style="position: relative;">  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">type</span> <span class="pl-c1">===</span> <span class="pl-s">'number'</span><span class="pl-kos">)</span></div></div></div><div data-key="75" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1500px); min-height: auto;"><div><div id="LC76" class="react-file-line html-div" data-testid="code-cell" data-line-number="76" inert="" style="position: relative;">    <span class="pl-s1">length</span> <span class="pl-c1">=</span> <span class="pl-s1">subject</span> <span class="pl-c1">&gt;</span> <span class="pl-c1">0</span> ? <span class="pl-s1">subject</span> <span class="pl-c1">&gt;&gt;&gt;</span> <span class="pl-c1">0</span> : <span class="pl-c1">0</span></div></div></div><div data-key="76" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1520px); min-height: auto;"><div><div id="LC77" class="react-file-line html-div" data-testid="code-cell" data-line-number="77" inert="" style="position: relative;">  <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">type</span> <span class="pl-c1">===</span> <span class="pl-s">'string'</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="77" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1540px); min-height: auto;"><div><div id="LC78" class="react-file-line html-div" data-testid="code-cell" data-line-number="78" inert="" style="position: relative;">    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">encoding</span> <span class="pl-c1">===</span> <span class="pl-s">'base64'</span><span class="pl-kos">)</span></div></div></div><div data-key="78" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1560px); min-height: auto;"><div><div id="LC79" class="react-file-line html-div" data-testid="code-cell" data-line-number="79" inert="" style="position: relative;">      <span class="pl-s1">subject</span> <span class="pl-c1">=</span> <span class="pl-en">base64clean</span><span class="pl-kos">(</span><span class="pl-s1">subject</span><span class="pl-kos">)</span></div></div></div><div data-key="79" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1580px); min-height: auto;"><div><div id="LC80" class="react-file-line html-div" data-testid="code-cell" data-line-number="80" inert="" style="position: relative;">    <span class="pl-s1">length</span> <span class="pl-c1">=</span> <span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-en">byteLength</span><span class="pl-kos">(</span><span class="pl-s1">subject</span><span class="pl-kos">,</span> <span class="pl-s1">encoding</span><span class="pl-kos">)</span></div></div></div><div data-key="80" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1600px); min-height: auto;"><div><div id="LC81" class="react-file-line html-div" data-testid="code-cell" data-line-number="81" inert="" style="position: relative;">  <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">type</span> <span class="pl-c1">===</span> <span class="pl-s">'object'</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">subject</span> <span class="pl-c1">!==</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span> <span class="pl-c">// assume object is array-like</span></div></div></div><div data-key="81" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1620px); min-height: auto;"><div><div id="LC82" class="react-file-line html-div" data-testid="code-cell" data-line-number="82" inert="" style="position: relative;">    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">subject</span><span class="pl-kos">.</span><span class="pl-c1">type</span> <span class="pl-c1">===</span> <span class="pl-s">'Buffer'</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">isArray</span><span class="pl-kos">(</span><span class="pl-s1">subject</span><span class="pl-kos">.</span><span class="pl-c1">data</span><span class="pl-kos">)</span><span class="pl-kos">)</span></div></div></div><div data-key="82" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1640px); min-height: auto;"><div><div id="LC83" class="react-file-line html-div" data-testid="code-cell" data-line-number="83" inert="" style="position: relative;">      <span class="pl-s1">subject</span> <span class="pl-c1">=</span> <span class="pl-s1">subject</span><span class="pl-kos">.</span><span class="pl-c1">data</span></div></div></div><div data-key="83" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1660px); min-height: auto;"><div><div id="LC84" class="react-file-line html-div" data-testid="code-cell" data-line-number="84" inert="" style="position: relative;">    <span class="pl-s1">length</span> <span class="pl-c1">=</span> <span class="pl-c1">+</span><span class="pl-s1">subject</span><span class="pl-kos">.</span><span class="pl-c1">length</span> <span class="pl-c1">&gt;</span> <span class="pl-c1">0</span> ? <span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">floor</span><span class="pl-kos">(</span><span class="pl-c1">+</span><span class="pl-s1">subject</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">)</span> : <span class="pl-c1">0</span></div></div></div><div data-key="84" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1680px); min-height: auto;"><div><div id="LC85" class="react-file-line html-div" data-testid="code-cell" data-line-number="85" inert="" style="position: relative;">  <span class="pl-kos">}</span> <span class="pl-k">else</span></div></div></div><div data-key="85" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1700px); min-height: auto;"><div><div id="LC86" class="react-file-line html-div" data-testid="code-cell" data-line-number="86" inert="" style="position: relative;">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-v">TypeError</span><span class="pl-kos">(</span><span class="pl-s">'must start with number, buffer, array or string'</span><span class="pl-kos">)</span></div></div></div><div data-key="86" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1720px); min-height: auto;"><div><div id="LC87" class="react-file-line html-div" data-testid="code-cell" data-line-number="87" inert="" style="position: relative;">
</div></div></div><div data-key="87" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1740px); min-height: auto;"><div><div id="LC88" class="react-file-line html-div" data-testid="code-cell" data-line-number="88" inert="" style="position: relative;">  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">length</span> <span class="pl-c1">&gt;</span> <span class="pl-s1">kMaxLength</span><span class="pl-kos">)</span></div></div></div><div data-key="88" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1760px); min-height: auto;"><div><div id="LC89" class="react-file-line html-div" data-testid="code-cell" data-line-number="89" inert="" style="position: relative;">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-v">RangeError</span><span class="pl-kos">(</span><span class="pl-s">'Attempt to allocate Buffer larger than maximum '</span> <span class="pl-c1">+</span></div></div></div><div data-key="89" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1780px); min-height: auto;"><div><div id="LC90" class="react-file-line html-div" data-testid="code-cell" data-line-number="90" inert="" style="position: relative;">      <span class="pl-s">'size: 0x'</span> <span class="pl-c1">+</span> <span class="pl-s1">kMaxLength</span><span class="pl-kos">.</span><span class="pl-en">toString</span><span class="pl-kos">(</span><span class="pl-c1">16</span><span class="pl-kos">)</span> <span class="pl-c1">+</span> <span class="pl-s">' bytes'</span><span class="pl-kos">)</span></div></div></div><div data-key="90" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1800px); min-height: auto;"><div><div id="LC91" class="react-file-line html-div" data-testid="code-cell" data-line-number="91" inert="" style="position: relative;">
</div></div></div><div data-key="91" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1820px); min-height: auto;"><div><div id="LC92" class="react-file-line html-div" data-testid="code-cell" data-line-number="92" inert="" style="position: relative;">  <span class="pl-k">var</span> <span class="pl-s1">buf</span></div></div></div><div data-key="92" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1840px); min-height: auto;"><div><div id="LC93" class="react-file-line html-div" data-testid="code-cell" data-line-number="93" inert="" style="position: relative;">  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-c1">TYPED_ARRAY_SUPPORT</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="93" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1860px); min-height: auto;"><div><div id="LC94" class="react-file-line html-div" data-testid="code-cell" data-line-number="94" inert="" style="position: relative;">    <span class="pl-c">// Preferred: Return an augmented `Uint8Array` instance for best performance</span></div></div></div><div data-key="94" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1880px); min-height: auto;"><div><div id="LC95" class="react-file-line html-div" data-testid="code-cell" data-line-number="95" inert="" style="position: relative;">    <span class="pl-s1">buf</span> <span class="pl-c1">=</span> <span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-en">_augment</span><span class="pl-kos">(</span><span class="pl-k">new</span> <span class="pl-v">Uint8Array</span><span class="pl-kos">(</span><span class="pl-s1">length</span><span class="pl-kos">)</span><span class="pl-kos">)</span></div></div></div><div data-key="95" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1900px); min-height: auto;"><div><div id="LC96" class="react-file-line html-div" data-testid="code-cell" data-line-number="96" inert="" style="position: relative;">  <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></div></div></div><div data-key="96" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1920px); min-height: auto;"><div><div id="LC97" class="react-file-line html-div" data-testid="code-cell" data-line-number="97" inert="" style="position: relative;">    <span class="pl-c">// Fallback: Return THIS instance of Buffer (created by `new`)</span></div></div></div><div data-key="97" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1940px); min-height: auto;"><div><div id="LC98" class="react-file-line html-div" data-testid="code-cell" data-line-number="98" inert="" style="position: relative;">    <span class="pl-s1">buf</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span></div></div></div><div data-key="98" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1960px); min-height: auto;"><div><div id="LC99" class="react-file-line html-div" data-testid="code-cell" data-line-number="99" inert="" style="position: relative;">    <span class="pl-s1">buf</span><span class="pl-kos">.</span><span class="pl-c1">length</span> <span class="pl-c1">=</span> <span class="pl-s1">length</span></div></div></div><div data-key="99" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(1980px); min-height: auto;"><div><div id="LC100" class="react-file-line html-div" data-testid="code-cell" data-line-number="100" inert="" style="position: relative;">    <span class="pl-s1">buf</span><span class="pl-kos">.</span><span class="pl-c1">_isBuffer</span> <span class="pl-c1">=</span> <span class="pl-c1">true</span></div></div></div><div data-key="100" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2000px); min-height: auto;"><div><div id="LC101" class="react-file-line html-div" data-testid="code-cell" data-line-number="101" inert="" style="position: relative;">  <span class="pl-kos">}</span></div></div></div><div data-key="101" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2020px); min-height: auto;"><div><div id="LC102" class="react-file-line html-div" data-testid="code-cell" data-line-number="102" inert="" style="position: relative;">
</div></div></div><div data-key="102" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2040px); min-height: auto;"><div><div id="LC103" class="react-file-line html-div" data-testid="code-cell" data-line-number="103" inert="" style="position: relative;">  <span class="pl-k">var</span> <span class="pl-s1">i</span></div></div></div><div data-key="103" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2060px); min-height: auto;"><div><div id="LC104" class="react-file-line html-div" data-testid="code-cell" data-line-number="104" inert="" style="position: relative;">  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-c1">TYPED_ARRAY_SUPPORT</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-s1">subject</span><span class="pl-kos">.</span><span class="pl-c1">byteLength</span> <span class="pl-c1">===</span> <span class="pl-s">'number'</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="104" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2080px); min-height: auto;"><div><div id="LC105" class="react-file-line html-div" data-testid="code-cell" data-line-number="105" inert="" style="position: relative;">    <span class="pl-c">// Speed optimization -- use set if we're copying from a typed array</span></div></div></div><div data-key="105" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2100px); min-height: auto;"><div><div id="LC106" class="react-file-line html-div" data-testid="code-cell" data-line-number="106" inert="" style="position: relative;">    <span class="pl-s1">buf</span><span class="pl-kos">.</span><span class="pl-en">_set</span><span class="pl-kos">(</span><span class="pl-s1">subject</span><span class="pl-kos">)</span></div></div></div><div data-key="106" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2120px); min-height: auto;"><div><div id="LC107" class="react-file-line html-div" data-testid="code-cell" data-line-number="107" inert="" style="position: relative;">  <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-en">isArrayish</span><span class="pl-kos">(</span><span class="pl-s1">subject</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="107" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2140px); min-height: auto;"><div><div id="LC108" class="react-file-line html-div" data-testid="code-cell" data-line-number="108" inert="" style="position: relative;">    <span class="pl-c">// Treat array-ish objects as a byte array</span></div></div></div><div data-key="108" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2160px); min-height: auto;"><div><div id="LC109" class="react-file-line html-div" data-testid="code-cell" data-line-number="109" inert="" style="position: relative;">    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-en">isBuffer</span><span class="pl-kos">(</span><span class="pl-s1">subject</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="109" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2180px); min-height: auto;"><div><div id="LC110" class="react-file-line html-div" data-testid="code-cell" data-line-number="110" inert="" style="position: relative;">      <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span></div></div></div><div data-key="110" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2200px); min-height: auto;"><div><div id="LC111" class="react-file-line html-div" data-testid="code-cell" data-line-number="111" inert="" style="position: relative;">        <span class="pl-s1">buf</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">subject</span><span class="pl-kos">.</span><span class="pl-en">readUInt8</span><span class="pl-kos">(</span><span class="pl-s1">i</span><span class="pl-kos">)</span></div></div></div><div data-key="111" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2220px); min-height: auto;"><div><div id="LC112" class="react-file-line html-div" data-testid="code-cell" data-line-number="112" inert="" style="position: relative;">    <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></div></div></div><div data-key="112" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2240px); min-height: auto;"><div><div id="LC113" class="react-file-line html-div" data-testid="code-cell" data-line-number="113" inert="" style="position: relative;">      <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span></div></div></div><div data-key="113" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2260px); min-height: auto;"><div><div id="LC114" class="react-file-line html-div" data-testid="code-cell" data-line-number="114" inert="" style="position: relative;">        <span class="pl-s1">buf</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">subject</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> <span class="pl-c1">%</span> <span class="pl-c1">256</span><span class="pl-kos">)</span> <span class="pl-c1">+</span> <span class="pl-c1">256</span><span class="pl-kos">)</span> <span class="pl-c1">%</span> <span class="pl-c1">256</span></div></div></div><div data-key="114" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2280px); min-height: auto;"><div><div id="LC115" class="react-file-line html-div" data-testid="code-cell" data-line-number="115" inert="" style="position: relative;">    <span class="pl-kos">}</span></div></div></div><div data-key="115" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2300px); min-height: auto;"><div><div id="LC116" class="react-file-line html-div" data-testid="code-cell" data-line-number="116" inert="" style="position: relative;">  <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">type</span> <span class="pl-c1">===</span> <span class="pl-s">'string'</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="116" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2320px); min-height: auto;"><div><div id="LC117" class="react-file-line html-div" data-testid="code-cell" data-line-number="117" inert="" style="position: relative;">    <span class="pl-s1">buf</span><span class="pl-kos">.</span><span class="pl-en">write</span><span class="pl-kos">(</span><span class="pl-s1">subject</span><span class="pl-kos">,</span> <span class="pl-c1">0</span><span class="pl-kos">,</span> <span class="pl-s1">encoding</span><span class="pl-kos">)</span></div></div></div><div data-key="117" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2340px); min-height: auto;"><div><div id="LC118" class="react-file-line html-div" data-testid="code-cell" data-line-number="118" inert="" style="position: relative;">  <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">type</span> <span class="pl-c1">===</span> <span class="pl-s">'number'</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-c1">!</span><span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-c1">TYPED_ARRAY_SUPPORT</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-c1">!</span><span class="pl-s1">noZero</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="118" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2360px); min-height: auto;"><div><div id="LC119" class="react-file-line html-div" data-testid="code-cell" data-line-number="119" inert="" style="position: relative;">    <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="119" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2380px); min-height: auto;"><div><div id="LC120" class="react-file-line html-div" data-testid="code-cell" data-line-number="120" inert="" style="position: relative;">      <span class="pl-s1">buf</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span></div></div></div><div data-key="120" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2400px); min-height: auto;"><div><div id="LC121" class="react-file-line html-div" data-testid="code-cell" data-line-number="121" inert="" style="position: relative;">    <span class="pl-kos">}</span></div></div></div><div data-key="121" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2420px); min-height: auto;"><div><div id="LC122" class="react-file-line html-div" data-testid="code-cell" data-line-number="122" inert="" style="position: relative;">  <span class="pl-kos">}</span></div></div></div><div data-key="122" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2440px); min-height: auto;"><div><div id="LC123" class="react-file-line html-div" data-testid="code-cell" data-line-number="123" inert="" style="position: relative;">
</div></div></div><div data-key="123" class="child-of-line-66  react-code-text react-code-line-contents virtual" style="transform: translateY(2460px); min-height: auto;"><div><div id="LC124" class="react-file-line html-div" data-testid="code-cell" data-line-number="124" inert="" style="position: relative;">  <span class="pl-k">return</span> <span class="pl-s1">buf</span></div></div></div><div data-key="124" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2480px); min-height: auto;"><div><div id="LC125" class="react-file-line html-div" data-testid="code-cell" data-line-number="125" inert="" style="position: relative;"><span class="pl-kos">}</span></div></div></div><div data-key="125" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2500px); min-height: auto;"><div><div id="LC126" class="react-file-line html-div" data-testid="code-cell" data-line-number="126" inert="" style="position: relative;">
</div></div></div><div data-key="126" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2520px); min-height: auto;"><div><div id="LC127" class="react-file-line html-div" data-testid="code-cell" data-line-number="127" inert="" style="position: relative;"><span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-en">isBuffer</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">b</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="127" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2540px); min-height: auto;"><div><div id="LC128" class="react-file-line html-div" data-testid="code-cell" data-line-number="128" inert="" style="position: relative;">  <span class="pl-k">return</span> <span class="pl-c1">!</span><span class="pl-c1">!</span><span class="pl-kos">(</span><span class="pl-s1">b</span> <span class="pl-c1">!=</span> <span class="pl-c1">null</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">b</span><span class="pl-kos">.</span><span class="pl-c1">_isBuffer</span><span class="pl-kos">)</span></div></div></div><div data-key="128" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2560px); min-height: auto;"><div><div id="LC129" class="react-file-line html-div" data-testid="code-cell" data-line-number="129" inert="" style="position: relative;"><span class="pl-kos">}</span></div></div></div><div data-key="129" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2580px); min-height: auto;"><div><div id="LC130" class="react-file-line html-div" data-testid="code-cell" data-line-number="130" inert="" style="position: relative;">
</div></div></div><div data-key="130" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2600px); min-height: auto;"><div><div id="LC131" class="react-file-line html-div" data-testid="code-cell" data-line-number="131" inert="" style="position: relative;"><span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-en">compare</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">a</span><span class="pl-kos">,</span> <span class="pl-s1">b</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="131" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2620px); min-height: auto;"><div><div id="LC132" class="react-file-line html-div" data-testid="code-cell" data-line-number="132" inert="" style="position: relative;">  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-en">isBuffer</span><span class="pl-kos">(</span><span class="pl-s1">a</span><span class="pl-kos">)</span> <span class="pl-c1">||</span> <span class="pl-c1">!</span><span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-en">isBuffer</span><span class="pl-kos">(</span><span class="pl-s1">b</span><span class="pl-kos">)</span><span class="pl-kos">)</span></div></div></div><div data-key="132" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2640px); min-height: auto;"><div><div id="LC133" class="react-file-line html-div" data-testid="code-cell" data-line-number="133" inert="" style="position: relative;">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-v">TypeError</span><span class="pl-kos">(</span><span class="pl-s">'Arguments must be Buffers'</span><span class="pl-kos">)</span></div></div></div><div data-key="133" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2660px); min-height: auto;"><div><div id="LC134" class="react-file-line html-div" data-testid="code-cell" data-line-number="134" inert="" style="position: relative;">
</div></div></div><div data-key="134" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2680px); min-height: auto;"><div><div id="LC135" class="react-file-line html-div" data-testid="code-cell" data-line-number="135" inert="" style="position: relative;">  <span class="pl-k">var</span> <span class="pl-s1">x</span> <span class="pl-c1">=</span> <span class="pl-s1">a</span><span class="pl-kos">.</span><span class="pl-c1">length</span></div></div></div><div data-key="135" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2700px); min-height: auto;"><div><div id="LC136" class="react-file-line html-div" data-testid="code-cell" data-line-number="136" inert="" style="position: relative;">  <span class="pl-k">var</span> <span class="pl-s1">y</span> <span class="pl-c1">=</span> <span class="pl-s1">b</span><span class="pl-kos">.</span><span class="pl-c1">length</span></div></div></div><div data-key="136" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2720px); min-height: auto;"><div><div id="LC137" class="react-file-line html-div" data-testid="code-cell" data-line-number="137" inert="" style="position: relative;">  <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">var</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">,</span> <span class="pl-s1">len</span> <span class="pl-c1">=</span> <span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">min</span><span class="pl-kos">(</span><span class="pl-s1">x</span><span class="pl-kos">,</span> <span class="pl-s1">y</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">len</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">a</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span> <span class="pl-c1">===</span> <span class="pl-s1">b</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span><span class="pl-kos">}</span></div></div></div><div data-key="137" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2740px); min-height: auto;"><div><div id="LC138" class="react-file-line html-div" data-testid="code-cell" data-line-number="138" inert="" style="position: relative;">  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">i</span> <span class="pl-c1">!==</span> <span class="pl-s1">len</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="138" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2760px); min-height: auto;"><div><div id="LC139" class="react-file-line html-div" data-testid="code-cell" data-line-number="139" inert="" style="position: relative;">    <span class="pl-s1">x</span> <span class="pl-c1">=</span> <span class="pl-s1">a</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span></div></div></div><div data-key="139" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2780px); min-height: auto;"><div><div id="LC140" class="react-file-line html-div" data-testid="code-cell" data-line-number="140" inert="" style="position: relative;">    <span class="pl-s1">y</span> <span class="pl-c1">=</span> <span class="pl-s1">b</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span></div></div></div><div data-key="140" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2800px); min-height: auto;"><div><div id="LC141" class="react-file-line html-div" data-testid="code-cell" data-line-number="141" inert="" style="position: relative;">  <span class="pl-kos">}</span></div></div></div><div data-key="141" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2820px); min-height: auto;"><div><div id="LC142" class="react-file-line html-div" data-testid="code-cell" data-line-number="142" inert="" style="position: relative;">  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">x</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">y</span><span class="pl-kos">)</span> <span class="pl-k">return</span> <span class="pl-c1">-</span><span class="pl-c1">1</span></div></div></div><div data-key="142" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2840px); min-height: auto;"><div><div id="LC143" class="react-file-line html-div" data-testid="code-cell" data-line-number="143" inert="" style="position: relative;">  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">y</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">x</span><span class="pl-kos">)</span> <span class="pl-k">return</span> <span class="pl-c1">1</span></div></div></div><div data-key="143" class="child-of-line-130  react-code-text react-code-line-contents virtual" style="transform: translateY(2860px); min-height: auto;"><div><div id="LC144" class="react-file-line html-div" data-testid="code-cell" data-line-number="144" inert="" style="position: relative;">  <span class="pl-k">return</span> <span class="pl-c1">0</span></div></div></div><div data-key="144" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2880px); min-height: auto;"><div><div id="LC145" class="react-file-line html-div" data-testid="code-cell" data-line-number="145" inert="" style="position: relative;"><span class="pl-kos">}</span></div></div></div><div data-key="145" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2900px); min-height: auto;"><div><div id="LC146" class="react-file-line html-div" data-testid="code-cell" data-line-number="146" inert="" style="position: relative;">
</div></div></div><div data-key="146" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2920px); min-height: auto;"><div><div id="LC147" class="react-file-line html-div" data-testid="code-cell" data-line-number="147" inert="" style="position: relative;"><span class="pl-v">Buffer</span><span class="pl-kos">.</span><span class="pl-en">isEncoding</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">encoding</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="13142" class="react-code-text react-code-line-contents virtual" style="transform: translateY(262840px); min-height: auto;"><div><div id="LC13143" class="react-file-line html-div" data-testid="code-cell" data-line-number="13143" inert="" style="position: relative;"><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"lodash.escape"</span>:<span class="pl-c1">45</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">,</span><span class="pl-c1">68</span>:<span class="pl-kos">[</span><span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">_dereq_</span><span class="pl-kos">,</span><span class="pl-s1">module</span><span class="pl-kos">,</span><span class="pl-s1">exports</span><span class="pl-kos">)</span><span class="pl-kos">{</span></div></div></div><div data-key="13143" class="react-code-text react-code-line-contents virtual" style="transform: translateY(262860px); min-height: auto;"><div><div id="LC13144" class="react-file-line html-div" data-testid="code-cell" data-line-number="13144" inert="" style="position: relative;"><span class="pl-k">var</span> <span class="pl-s1">_</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span><span class="pl-c1">escape</span>: <span class="pl-s1">_dereq_</span><span class="pl-kos">(</span><span class="pl-s">"lodash.escape"</span><span class="pl-kos">)</span><span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div><div data-key="13144" class="react-code-text react-code-line-contents virtual" style="transform: translateY(262880px); min-height: auto;"><div><div id="LC13145" class="react-file-line html-div" data-testid="code-cell" data-line-number="13145" inert="" style="position: relative;"><span class="pl-s1">module</span><span class="pl-kos">.</span><span class="pl-en">exports</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">obj</span><span class="pl-kos">)</span><span class="pl-kos">{</span></div></div></div><div data-key="13145" class="react-code-text react-code-line-contents virtual" style="transform: translateY(262900px); min-height: auto;"><div><div id="LC13146" class="react-file-line html-div" data-testid="code-cell" data-line-number="13146" inert="" style="position: relative;"><span class="pl-k">var</span> <span class="pl-s1">__t</span><span class="pl-kos">,</span><span class="pl-s1">__p</span><span class="pl-c1">=</span><span class="pl-s">''</span><span class="pl-kos">,</span><span class="pl-s1">__j</span><span class="pl-c1">=</span><span class="pl-v">Array</span><span class="pl-kos">.</span><span class="pl-c1">prototype</span><span class="pl-kos">.</span><span class="pl-c1">join</span><span class="pl-kos">,</span><span class="pl-en">print</span><span class="pl-c1">=</span><span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">{</span><span class="pl-s1">__p</span><span class="pl-c1">+=</span><span class="pl-s1">__j</span><span class="pl-kos">.</span><span class="pl-en">call</span><span class="pl-kos">(</span><span class="pl-smi">arguments</span><span class="pl-kos">,</span><span class="pl-s">''</span><span class="pl-kos">)</span><span class="pl-kos">;</span><span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div><div data-key="13146" class="react-code-text react-code-line-contents virtual" style="transform: translateY(262920px); min-height: auto;"><div><div id="LC13147" class="react-file-line html-div" data-testid="code-cell" data-line-number="13147" inert="" style="position: relative;"><span class="pl-k">with</span><span class="pl-kos">(</span><span class="pl-s1">obj</span><span class="pl-c1">||</span><span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">{</span></div></div></div><div data-key="13147" class="react-code-text react-code-line-contents virtual" style="transform: translateY(262940px); min-height: auto;"><div><div id="LC13148" class="react-file-line html-div" data-testid="code-cell" data-line-number="13148" inert="" style="position: relative;"><span class="pl-s1">__p</span><span class="pl-c1">+=</span><span class="pl-s">'------=mhtDocumentPart\nContent-Type: '</span><span class="pl-c1">+</span></div></div></div><div data-key="13148" class="react-code-text react-code-line-contents virtual" style="transform: translateY(262960px); min-height: auto;"><div><div id="LC13149" class="react-file-line html-div" data-testid="code-cell" data-line-number="13149" inert="" style="position: relative;"><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">__t</span><span class="pl-c1">=</span><span class="pl-kos">(</span> <span class="pl-s1">contentType</span> <span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-c1">==</span><span class="pl-c1">null</span>?<span class="pl-s">''</span>:<span class="pl-s1">__t</span><span class="pl-kos">)</span><span class="pl-c1">+</span></div></div></div><div data-key="13149" class="react-code-text react-code-line-contents virtual" style="transform: translateY(262980px); min-height: auto;"><div><div id="LC13150" class="react-file-line html-div" data-testid="code-cell" data-line-number="13150" inert="" style="position: relative;"><span class="pl-s">'\nContent-Transfer-Encoding: '</span><span class="pl-c1">+</span></div></div></div><div data-key="13150" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263000px); min-height: auto;"><div><div id="LC13151" class="react-file-line html-div" data-testid="code-cell" data-line-number="13151" inert="" style="position: relative;"><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">__t</span><span class="pl-c1">=</span><span class="pl-kos">(</span> <span class="pl-s1">contentEncoding</span> <span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-c1">==</span><span class="pl-c1">null</span>?<span class="pl-s">''</span>:<span class="pl-s1">__t</span><span class="pl-kos">)</span><span class="pl-c1">+</span></div></div></div><div data-key="13151" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263020px); min-height: auto;"><div><div id="LC13152" class="react-file-line html-div" data-testid="code-cell" data-line-number="13152" inert="" style="position: relative;"><span class="pl-s">'\nContent-Location: '</span><span class="pl-c1">+</span></div></div></div><div data-key="13152" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263040px); min-height: auto;"><div><div id="LC13153" class="react-file-line html-div" data-testid="code-cell" data-line-number="13153" inert="" style="position: relative;"><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">__t</span><span class="pl-c1">=</span><span class="pl-kos">(</span> <span class="pl-s1">contentLocation</span> <span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-c1">==</span><span class="pl-c1">null</span>?<span class="pl-s">''</span>:<span class="pl-s1">__t</span><span class="pl-kos">)</span><span class="pl-c1">+</span></div></div></div><div data-key="13153" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263060px); min-height: auto;"><div><div id="LC13154" class="react-file-line html-div" data-testid="code-cell" data-line-number="13154" inert="" style="position: relative;"><span class="pl-s">'\n\n'</span><span class="pl-c1">+</span></div></div></div><div data-key="13154" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263080px); min-height: auto;"><div><div id="LC13155" class="react-file-line html-div" data-testid="code-cell" data-line-number="13155" inert="" style="position: relative;"><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">__t</span><span class="pl-c1">=</span><span class="pl-kos">(</span> <span class="pl-s1">encodedContent</span> <span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-c1">==</span><span class="pl-c1">null</span>?<span class="pl-s">''</span>:<span class="pl-s1">__t</span><span class="pl-kos">)</span><span class="pl-c1">+</span></div></div></div><div data-key="13155" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263100px); min-height: auto;"><div><div id="LC13156" class="react-file-line html-div" data-testid="code-cell" data-line-number="13156" inert="" style="position: relative;"><span class="pl-s">'\n'</span><span class="pl-kos">;</span></div></div></div><div data-key="13156" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263120px); min-height: auto;"><div><div id="LC13157" class="react-file-line html-div" data-testid="code-cell" data-line-number="13157" inert="" style="position: relative;"><span class="pl-kos">}</span></div></div></div><div data-key="13157" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263140px); min-height: auto;"><div><div id="LC13158" class="react-file-line html-div" data-testid="code-cell" data-line-number="13158" inert="" style="position: relative;"><span class="pl-k">return</span> <span class="pl-s1">__p</span><span class="pl-kos">;</span></div></div></div><div data-key="13158" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263160px); min-height: auto;"><div><div id="LC13159" class="react-file-line html-div" data-testid="code-cell" data-line-number="13159" inert="" style="position: relative;"><span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div><div data-key="13159" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263180px); min-height: auto;"><div><div id="LC13160" class="react-file-line html-div" data-testid="code-cell" data-line-number="13160" inert="" style="position: relative;">
</div></div></div><div data-key="13160" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263200px); min-height: auto;"><div><div id="LC13161" class="react-file-line html-div" data-testid="code-cell" data-line-number="13161" inert="" style="position: relative;"><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"lodash.escape"</span>:<span class="pl-c1">45</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">,</span><span class="pl-c1">69</span>:<span class="pl-kos">[</span><span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">_dereq_</span><span class="pl-kos">,</span><span class="pl-s1">module</span><span class="pl-kos">,</span><span class="pl-s1">exports</span><span class="pl-kos">)</span><span class="pl-kos">{</span></div></div></div><div data-key="13161" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263220px); min-height: auto;"><div><div id="LC13162" class="react-file-line html-div" data-testid="code-cell" data-line-number="13162" inert="" style="position: relative;"><span class="pl-k">var</span> <span class="pl-s1">mhtDocumentTemplate</span><span class="pl-kos">,</span> <span class="pl-s1">mhtPartTemplate</span><span class="pl-kos">;</span></div></div></div><div data-key="13162" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263240px); min-height: auto;"><div><div id="LC13163" class="react-file-line html-div" data-testid="code-cell" data-line-number="13163" inert="" style="position: relative;">
</div></div></div><div data-key="13163" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263260px); min-height: auto;"><div><div id="LC13164" class="react-file-line html-div" data-testid="code-cell" data-line-number="13164" inert="" style="position: relative;"><span class="pl-s1">mhtDocumentTemplate</span> <span class="pl-c1">=</span> <span class="pl-s1">_dereq_</span><span class="pl-kos">(</span><span class="pl-s">'./templates/mht_document'</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="13164" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263280px); min-height: auto;"><div><div id="LC13165" class="react-file-line html-div" data-testid="code-cell" data-line-number="13165" inert="" style="position: relative;">
</div></div></div><div data-key="13165" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263300px); min-height: auto;"><div><div id="LC13166" class="react-file-line html-div" data-testid="code-cell" data-line-number="13166" inert="" style="position: relative;"><span class="pl-s1">mhtPartTemplate</span> <span class="pl-c1">=</span> <span class="pl-s1">_dereq_</span><span class="pl-kos">(</span><span class="pl-s">'./templates/mht_part'</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="13166" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263320px); min-height: auto;"><div><div id="LC13167" class="react-file-line html-div" data-testid="code-cell" data-line-number="13167" inert="" style="position: relative;">
</div></div></div><div data-key="13167" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263340px); min-height: auto;"><div><div id="LC13168" class="react-file-line html-div" data-testid="code-cell" data-line-number="13168" inert="" style="position: relative;"><span class="pl-s1">module</span><span class="pl-kos">.</span><span class="pl-c1">exports</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span></div></div></div><div data-key="13168" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263360px); min-height: auto;"><div><div id="LC13169" class="react-file-line html-div" data-testid="code-cell" data-line-number="13169" inert="" style="position: relative;">  <span class="pl-en">getMHTdocument</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">htmlSource</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="13169" class="child-of-line-13168  react-code-text react-code-line-contents virtual" style="transform: translateY(263380px); min-height: auto;"><div><div id="LC13170" class="react-file-line html-div" data-testid="code-cell" data-line-number="13170" inert="" style="position: relative;">    <span class="pl-k">var</span> <span class="pl-s1">imageContentParts</span><span class="pl-kos">,</span> <span class="pl-s1">_ref</span><span class="pl-kos">;</span></div></div></div><div data-key="13170" class="child-of-line-13168  react-code-text react-code-line-contents virtual" style="transform: translateY(263400px); min-height: auto;"><div><div id="LC13171" class="react-file-line html-div" data-testid="code-cell" data-line-number="13171" inert="" style="position: relative;">    <span class="pl-s1">_ref</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">_prepareImageParts</span><span class="pl-kos">(</span><span class="pl-s1">htmlSource</span><span class="pl-kos">)</span><span class="pl-kos">,</span> <span class="pl-s1">htmlSource</span> <span class="pl-c1">=</span> <span class="pl-s1">_ref</span><span class="pl-kos">.</span><span class="pl-c1">htmlSource</span><span class="pl-kos">,</span> <span class="pl-s1">imageContentParts</span> <span class="pl-c1">=</span> <span class="pl-s1">_ref</span><span class="pl-kos">.</span><span class="pl-c1">imageContentParts</span><span class="pl-kos">;</span></div></div></div><div data-key="13171" class="child-of-line-13168  react-code-text react-code-line-contents virtual" style="transform: translateY(263420px); min-height: auto;"><div><div id="LC13172" class="react-file-line html-div" data-testid="code-cell" data-line-number="13172" inert="" style="position: relative;">    <span class="pl-s1">htmlSource</span> <span class="pl-c1">=</span> <span class="pl-s1">htmlSource</span><span class="pl-kos">.</span><span class="pl-en">replace</span><span class="pl-kos">(</span><span class="pl-pds"><span class="pl-c1">/</span><span class="pl-cce">\=</span><span class="pl-c1">/</span>g</span><span class="pl-kos">,</span> <span class="pl-s">'=3D'</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="13172" class="child-of-line-13168  react-code-text react-code-line-contents virtual" style="transform: translateY(263440px); min-height: auto;"><div><div id="LC13173" class="react-file-line html-div" data-testid="code-cell" data-line-number="13173" inert="" style="position: relative;">    <span class="pl-k">return</span> <span class="pl-s1">mhtDocumentTemplate</span><span class="pl-kos">(</span><span class="pl-kos">{</span></div></div></div><div data-key="13173" class="child-of-line-13168  react-code-text react-code-line-contents virtual" style="transform: translateY(263460px); min-height: auto;"><div><div id="LC13174" class="react-file-line html-div" data-testid="code-cell" data-line-number="13174" inert="" style="position: relative;">      <span class="pl-c1">htmlSource</span>: <span class="pl-s1">htmlSource</span><span class="pl-kos">,</span></div></div></div><div data-key="13174" class="child-of-line-13168  react-code-text react-code-line-contents virtual" style="transform: translateY(263480px); min-height: auto;"><div><div id="LC13175" class="react-file-line html-div" data-testid="code-cell" data-line-number="13175" inert="" style="position: relative;">      <span class="pl-c1">contentParts</span>: <span class="pl-s1">imageContentParts</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s">'\n'</span><span class="pl-kos">)</span></div></div></div><div data-key="13175" class="child-of-line-13168  react-code-text react-code-line-contents virtual" style="transform: translateY(263500px); min-height: auto;"><div><div id="LC13176" class="react-file-line html-div" data-testid="code-cell" data-line-number="13176" inert="" style="position: relative;">    <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="13176" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263520px); min-height: auto;"><div><div id="LC13177" class="react-file-line html-div" data-testid="code-cell" data-line-number="13177" inert="" style="position: relative;">  <span class="pl-kos">}</span><span class="pl-kos">,</span></div></div></div><div data-key="13177" class="react-code-text react-code-line-contents virtual" style="transform: translateY(263540px); min-height: auto;"><div><div id="LC13178" class="react-file-line html-div" data-testid="code-cell" data-line-number="13178" inert="" style="position: relative;">  <span class="pl-en">_prepareImageParts</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">htmlSource</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="13178" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(263560px); min-height: auto;"><div><div id="LC13179" class="react-file-line html-div" data-testid="code-cell" data-line-number="13179" inert="" style="position: relative;">    <span class="pl-k">var</span> <span class="pl-s1">imageContentParts</span><span class="pl-kos">,</span> <span class="pl-s1">inlinedReplacer</span><span class="pl-kos">,</span> <span class="pl-s1">inlinedSrcPattern</span><span class="pl-kos">;</span></div></div></div><div data-key="13179" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(263580px); min-height: auto;"><div><div id="LC13180" class="react-file-line html-div" data-testid="code-cell" data-line-number="13180" inert="" style="position: relative;">    <span class="pl-s1">imageContentParts</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span></div></div></div><div data-key="13180" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(263600px); min-height: auto;"><div><div id="LC13181" class="react-file-line html-div" data-testid="code-cell" data-line-number="13181" inert="" style="position: relative;">    <span class="pl-s1">inlinedSrcPattern</span> <span class="pl-c1">=</span> <span class="pl-pds"><span class="pl-c1">/</span><span class="pl-s">"</span><span class="pl-s">d</span><span class="pl-s">a</span><span class="pl-s">t</span><span class="pl-s">a</span><span class="pl-s">:</span><span class="pl-kos">(</span><span class="pl-cce">\w</span><span class="pl-c1">+</span><span class="pl-cce">\/</span><span class="pl-cce">\w</span><span class="pl-c1">+</span><span class="pl-kos">)</span><span class="pl-s">;</span><span class="pl-kos">(</span><span class="pl-cce">\w</span><span class="pl-c1">+</span><span class="pl-kos">)</span><span class="pl-s">,</span><span class="pl-kos">(</span><span class="pl-cce">\S</span><span class="pl-c1">+</span><span class="pl-kos">)</span><span class="pl-s">"</span><span class="pl-c1">/</span>g</span><span class="pl-kos">;</span></div></div></div><div data-key="13181" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(263620px); min-height: auto;"><div><div id="LC13182" class="react-file-line html-div" data-testid="code-cell" data-line-number="13182" inert="" style="position: relative;">    <span class="pl-s1">inlinedReplacer</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">match</span><span class="pl-kos">,</span> <span class="pl-s1">contentType</span><span class="pl-kos">,</span> <span class="pl-s1">contentEncoding</span><span class="pl-kos">,</span> <span class="pl-s1">encodedContent</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="13182" class="child-of-line-13177 child-of-line-13181  react-code-text react-code-line-contents virtual" style="transform: translateY(263640px); min-height: auto;"><div><div id="LC13183" class="react-file-line html-div" data-testid="code-cell" data-line-number="13183" inert="" style="position: relative;">      <span class="pl-k">var</span> <span class="pl-s1">contentLocation</span><span class="pl-kos">,</span> <span class="pl-s1">extension</span><span class="pl-kos">,</span> <span class="pl-s1">index</span><span class="pl-kos">;</span></div></div></div><div data-key="13183" class="child-of-line-13177 child-of-line-13181  react-code-text react-code-line-contents virtual" style="transform: translateY(263660px); min-height: auto;"><div><div id="LC13184" class="react-file-line html-div" data-testid="code-cell" data-line-number="13184" inert="" style="position: relative;">      <span class="pl-s1">index</span> <span class="pl-c1">=</span> <span class="pl-s1">imageContentParts</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span></div></div></div><div data-key="13184" class="child-of-line-13177 child-of-line-13181  react-code-text react-code-line-contents virtual" style="transform: translateY(263680px); min-height: auto;"><div><div id="LC13185" class="react-file-line html-div" data-testid="code-cell" data-line-number="13185" inert="" style="position: relative;">      <span class="pl-s1">extension</span> <span class="pl-c1">=</span> <span class="pl-s1">contentType</span><span class="pl-kos">.</span><span class="pl-en">split</span><span class="pl-kos">(</span><span class="pl-s">'/'</span><span class="pl-kos">)</span><span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">]</span><span class="pl-kos">;</span></div></div></div><div data-key="13185" class="child-of-line-13177 child-of-line-13181  react-code-text react-code-line-contents virtual" style="transform: translateY(263700px); min-height: auto;"><div><div id="LC13186" class="react-file-line html-div" data-testid="code-cell" data-line-number="13186" inert="" style="position: relative;">      <span class="pl-s1">contentLocation</span> <span class="pl-c1">=</span> <span class="pl-s">"file:///C:/fake/image"</span> <span class="pl-c1">+</span> <span class="pl-s1">index</span> <span class="pl-c1">+</span> <span class="pl-s">"."</span> <span class="pl-c1">+</span> <span class="pl-s1">extension</span><span class="pl-kos">;</span></div></div></div><div data-key="13186" class="child-of-line-13177 child-of-line-13181  react-code-text react-code-line-contents virtual" style="transform: translateY(263720px); min-height: auto;"><div><div id="LC13187" class="react-file-line html-div" data-testid="code-cell" data-line-number="13187" inert="" style="position: relative;">      <span class="pl-s1">imageContentParts</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">mhtPartTemplate</span><span class="pl-kos">(</span><span class="pl-kos">{</span></div></div></div><div data-key="13187" class="child-of-line-13177 child-of-line-13181  react-code-text react-code-line-contents virtual" style="transform: translateY(263740px); min-height: auto;"><div><div id="LC13188" class="react-file-line html-div" data-testid="code-cell" data-line-number="13188" inert="" style="position: relative;">        <span class="pl-c1">contentType</span>: <span class="pl-s1">contentType</span><span class="pl-kos">,</span></div></div></div><div data-key="13188" class="child-of-line-13177 child-of-line-13181  react-code-text react-code-line-contents virtual" style="transform: translateY(263760px); min-height: auto;"><div><div id="LC13189" class="react-file-line html-div" data-testid="code-cell" data-line-number="13189" inert="" style="position: relative;">        <span class="pl-c1">contentEncoding</span>: <span class="pl-s1">contentEncoding</span><span class="pl-kos">,</span></div></div></div><div data-key="13189" class="child-of-line-13177 child-of-line-13181  react-code-text react-code-line-contents virtual" style="transform: translateY(263780px); min-height: auto;"><div><div id="LC13190" class="react-file-line html-div" data-testid="code-cell" data-line-number="13190" inert="" style="position: relative;">        <span class="pl-c1">contentLocation</span>: <span class="pl-s1">contentLocation</span><span class="pl-kos">,</span></div></div></div><div data-key="13190" class="child-of-line-13177 child-of-line-13181  react-code-text react-code-line-contents virtual" style="transform: translateY(263800px); min-height: auto;"><div><div id="LC13191" class="react-file-line html-div" data-testid="code-cell" data-line-number="13191" inert="" style="position: relative;">        <span class="pl-c1">encodedContent</span>: <span class="pl-s1">encodedContent</span></div></div></div><div data-key="13191" class="child-of-line-13177 child-of-line-13181  react-code-text react-code-line-contents virtual" style="transform: translateY(263820px); min-height: auto;"><div><div id="LC13192" class="react-file-line html-div" data-testid="code-cell" data-line-number="13192" inert="" style="position: relative;">      <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="13192" class="child-of-line-13177 child-of-line-13181  react-code-text react-code-line-contents virtual" style="transform: translateY(263840px); min-height: auto;"><div><div id="LC13193" class="react-file-line html-div" data-testid="code-cell" data-line-number="13193" inert="" style="position: relative;">      <span class="pl-k">return</span> <span class="pl-s">"\""</span> <span class="pl-c1">+</span> <span class="pl-s1">contentLocation</span> <span class="pl-c1">+</span> <span class="pl-s">"\""</span><span class="pl-kos">;</span></div></div></div><div data-key="13193" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(263860px); min-height: auto;"><div><div id="LC13194" class="react-file-line html-div" data-testid="code-cell" data-line-number="13194" inert="" style="position: relative;">    <span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div><div data-key="13194" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(263880px); min-height: auto;"><div><div id="LC13195" class="react-file-line html-div" data-testid="code-cell" data-line-number="13195" inert="" style="position: relative;">    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-k">typeof</span> <span class="pl-s1">htmlSource</span> <span class="pl-c1">===</span> <span class="pl-s">'string'</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="13195" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(263900px); min-height: auto;"><div><div id="LC13196" class="react-file-line html-div" data-testid="code-cell" data-line-number="13196" inert="" style="position: relative;">      <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-pds"><span class="pl-c1">/</span><span class="pl-s">&lt;</span><span class="pl-s">i</span><span class="pl-s">m</span><span class="pl-s">g</span><span class="pl-c1">/</span>g</span><span class="pl-kos">.</span><span class="pl-en">test</span><span class="pl-kos">(</span><span class="pl-s1">htmlSource</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="13196" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(263920px); min-height: auto;"><div><div id="LC13197" class="react-file-line html-div" data-testid="code-cell" data-line-number="13197" inert="" style="position: relative;">        <span class="pl-k">return</span> <span class="pl-kos">{</span></div></div></div><div data-key="13197" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(263940px); min-height: auto;"><div><div id="LC13198" class="react-file-line html-div" data-testid="code-cell" data-line-number="13198" inert="" style="position: relative;">          <span class="pl-c1">htmlSource</span>: <span class="pl-s1">htmlSource</span><span class="pl-kos">,</span></div></div></div><div data-key="13198" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(263960px); min-height: auto;"><div><div id="LC13199" class="react-file-line html-div" data-testid="code-cell" data-line-number="13199" inert="" style="position: relative;">          <span class="pl-c1">imageContentParts</span>: <span class="pl-s1">imageContentParts</span></div></div></div><div data-key="13199" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(263980px); min-height: auto;"><div><div id="LC13200" class="react-file-line html-div" data-testid="code-cell" data-line-number="13200" inert="" style="position: relative;">        <span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div><div data-key="13200" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(264000px); min-height: auto;"><div><div id="LC13201" class="react-file-line html-div" data-testid="code-cell" data-line-number="13201" inert="" style="position: relative;">      <span class="pl-kos">}</span></div></div></div><div data-key="13201" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(264020px); min-height: auto;"><div><div id="LC13202" class="react-file-line html-div" data-testid="code-cell" data-line-number="13202" inert="" style="position: relative;">      <span class="pl-s1">htmlSource</span> <span class="pl-c1">=</span> <span class="pl-s1">htmlSource</span><span class="pl-kos">.</span><span class="pl-en">replace</span><span class="pl-kos">(</span><span class="pl-s1">inlinedSrcPattern</span><span class="pl-kos">,</span> <span class="pl-s1">inlinedReplacer</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="13202" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(264040px); min-height: auto;"><div><div id="LC13203" class="react-file-line html-div" data-testid="code-cell" data-line-number="13203" inert="" style="position: relative;">      <span class="pl-k">return</span> <span class="pl-kos">{</span></div></div></div><div data-key="13203" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(264060px); min-height: auto;"><div><div id="LC13204" class="react-file-line html-div" data-testid="code-cell" data-line-number="13204" inert="" style="position: relative;">        <span class="pl-c1">htmlSource</span>: <span class="pl-s1">htmlSource</span><span class="pl-kos">,</span></div></div></div><div data-key="13204" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(264080px); min-height: auto;"><div><div id="LC13205" class="react-file-line html-div" data-testid="code-cell" data-line-number="13205" inert="" style="position: relative;">        <span class="pl-c1">imageContentParts</span>: <span class="pl-s1">imageContentParts</span></div></div></div><div data-key="13205" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(264100px); min-height: auto;"><div><div id="LC13206" class="react-file-line html-div" data-testid="code-cell" data-line-number="13206" inert="" style="position: relative;">      <span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div><div data-key="13206" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(264120px); min-height: auto;"><div><div id="LC13207" class="react-file-line html-div" data-testid="code-cell" data-line-number="13207" inert="" style="position: relative;">    <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></div></div></div><div data-key="13207" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(264140px); min-height: auto;"><div><div id="LC13208" class="react-file-line html-div" data-testid="code-cell" data-line-number="13208" inert="" style="position: relative;">      <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-v">Error</span><span class="pl-kos">(</span><span class="pl-s">"Not a valid source provided!"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div><div data-key="13208" class="child-of-line-13177  react-code-text react-code-line-contents virtual" style="transform: translateY(264160px); min-height: auto;"><div><div id="LC13209" class="react-file-line html-div" data-testid="code-cell" data-line-number="13209" inert="" style="position: relative;">    <span class="pl-kos">}</span></div></div></div><div data-key="13209" class="react-code-text react-code-line-contents virtual" style="transform: translateY(264180px); min-height: auto;"><div><div id="LC13210" class="react-file-line html-div" data-testid="code-cell" data-line-number="13210" inert="" style="position: relative;">  <span class="pl-kos">}</span></div></div></div><div data-key="13210" class="react-code-text react-code-line-contents virtual" style="transform: translateY(264200px); min-height: auto;"><div><div id="LC13211" class="react-file-line html-div" data-testid="code-cell" data-line-number="13211" inert="" style="position: relative;"><span class="pl-kos">}</span><span class="pl-kos">;</span></div></div></div><div data-key="13211" class="react-code-text react-code-line-contents virtual" style="transform: translateY(264220px); min-height: auto;"><div><div id="LC13212" class="react-file-line html-div" data-testid="code-cell" data-line-number="13212" inert="" style="position: relative;">
</div></div></div><div data-key="13212" class="react-code-text react-code-line-contents virtual" style="transform: translateY(264240px); min-height: auto;"><div><div id="LC13213" class="react-file-line html-div" data-testid="code-cell" data-line-number="13213" inert="" style="position: relative;">
</div></div></div><div data-key="13213" class="react-code-text react-code-line-contents virtual" style="transform: translateY(264260px); min-height: auto;"><div><div id="LC13214" class="react-file-line html-div" data-testid="code-cell" data-line-number="13214" inert="" style="position: relative;"><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"./templates/mht_document"</span>:<span class="pl-c1">67</span><span class="pl-kos">,</span><span class="pl-s">"./templates/mht_part"</span>:<span class="pl-c1">68</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">[</span><span class="pl-c1">64</span><span class="pl-kos">]</span><span class="pl-kos">)</span></div></div></div><div data-key="13214" class="react-code-text react-code-line-contents virtual" style="transform: translateY(264280px); min-height: auto;"><div><div id="LC13215" class="react-file-line html-div" data-testid="code-cell" data-line-number="13215" inert="" style="position: relative;"><span class="pl-kos">(</span><span class="pl-c1">64</span><span class="pl-kos">)</span></div></div></div><div data-key="13215" class="react-code-text react-code-line-contents virtual" style="transform: translateY(264300px); min-height: auto;"><div><div id="LC13216" class="react-file-line html-div" data-testid="code-cell" data-line-number="13216" inert="" style="position: relative;"><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div></div><button hidden="" data-hotkey="Control+a"></button></div></div><div class="Box-sc-62in7e-0 hDQBwb"><div class="Box-sc-62in7e-0 bWyjbU"></div></div></div></div><div id="copilot-button-container"></div></div><div id="highlighted-line-menu-container"></div></div></div></section></div></div></div>   </div></div></div></div></div></div></div><div id="find-result-marks-container" class="Box-sc-62in7e-0 vdPNv"></div><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+F6,Control+Shift+F6"></button><button hidden="" data-hotkey="Control+F6,Control+Shift+F6"></button></div> <!-- --> <!-- --> <script type="application/json" id="__PRIMER_DATA__R_0___">{"resolvedServerColorMode":"day"}</script></div>
</react-app>




  </div>

</turbo-frame>

    </main>
  </div>

  </div>

          <footer class="footer pt-7 pb-6 f6 color-fg-muted color-border-subtle p-responsive" role="contentinfo" hidden="">
  <h2 class="sr-only">Footer</h2>

  


  <div class="d-flex flex-justify-center flex-items-center flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap">
    <div class="d-flex flex-items-center flex-shrink-0 mx-2">
      <a aria-label="GitHub Homepage" class="footer-octicon mr-2" href="https://github.com/">
        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
</svg>
</a>
      <span>
        © 2026 GitHub,&nbsp;Inc.
      </span>
    </div>

    <nav aria-label="Footer">
      <h3 class="sr-only" id="sr-footer-heading">Footer navigation</h3>

      <ul class="list-style-none d-flex flex-justify-center flex-wrap mb-2 mb-lg-0" aria-labelledby="sr-footer-heading">

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link--secondary Link">Terms</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link--secondary Link">Privacy</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security" data-view-component="true" class="Link--secondary Link">Security</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}" href="https://www.githubstatus.com/" data-view-component="true" class="Link--secondary Link">Status</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to community&quot;,&quot;label&quot;:&quot;text:community&quot;}" href="https://github.community/" data-view-component="true" class="Link--secondary Link">Community</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to docs&quot;,&quot;label&quot;:&quot;text:docs&quot;}" href="https://docs.github.com/" data-view-component="true" class="Link--secondary Link">Docs</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}" href="https://support.github.com/?tags=dotcom-footer" data-view-component="true" class="Link--secondary Link">Contact</a>
          </li>

          <li class="mx-2">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement" data-analytics-event="{&quot;location&quot;:&quot;footer&quot;,&quot;action&quot;:&quot;cookies&quot;,&quot;context&quot;:&quot;subfooter&quot;,&quot;tag&quot;:&quot;link&quot;,&quot;label&quot;:&quot;cookies_link_subfooter_footer&quot;}">
       Manage cookies
    </button>
  </cookie-consent-link>
</li>

<li class="mx-2">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent text-left" data-action="click:cookie-consent-link#showConsentManagement" data-analytics-event="{&quot;location&quot;:&quot;footer&quot;,&quot;action&quot;:&quot;dont_share_info&quot;,&quot;context&quot;:&quot;subfooter&quot;,&quot;tag&quot;:&quot;link&quot;,&quot;label&quot;:&quot;dont_share_info_link_subfooter_footer&quot;}">
      Do not share my personal information
    </button>
  </cookie-consent-link>
</li>

      </ul>
    </nav>
  </div>
</footer>



    <ghcc-consent id="ghcc" class="position-fixed bottom-0 left-0" style="z-index: 999999" data-locale="en" data-initial-cookie-consent-allowed="" data-cookie-consent-required="false" data-catalyst=""></ghcc-consent>




  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden="">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

    <template id="site-details-dialog"></template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;"></div>
</div>

    <template id="snippet-clipboard-copy-button"></template>
<template id="snippet-clipboard-copy-button-unpositioned"></template>


    <style>
      .user-mention[href$="/QunaQuna"] {
        color: var(--color-user-mention-fg);
        background-color: var(--bgColor-attention-muted, var(--color-attention-subtle));
        border-radius: 2px;
        margin-left: -2px;
        margin-right: -2px;
      }
      .user-mention[href$="/QunaQuna"]:before,
      .user-mention[href$="/QunaQuna"]:after {
        content: '';
        display: inline-block;
        width: 2px;
      }
    </style>


    </div>
    <div id="js-global-screen-reader-notice" class="sr-only mt-n1" aria-live="polite" aria-atomic="true"></div>
    <div id="js-global-screen-reader-notice-assertive" class="sr-only mt-n1" aria-live="assertive" aria-atomic="true"></div>
  


<div class="sr-only mt-n1" id="screenReaderAnnouncementDiv" role="alert" data-testid="screenReaderAnnouncement" aria-live="assertive"></div><live-region><template shadowrootmode="open">
<style>
:host {
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
<div id="polite" aria-live="polite" aria-atomic="true"></div>
<div id="assertive" aria-live="assertive" aria-atomic="true"></div>
</template></live-region></body></html>