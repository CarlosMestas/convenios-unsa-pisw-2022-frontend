'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">convenios-unsa-pisw-2022-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8a65f2a74cfbe6bfe1733074eda8a951d2a1aeb5bce45045fe095695d8bd73cd3c3d8d57d07c4a24457fecdfd8178782cdda6dd04e8a1a9366262adb1007c2c5"' : 'data-target="#xs-components-links-module-AppModule-8a65f2a74cfbe6bfe1733074eda8a951d2a1aeb5bce45045fe095695d8bd73cd3c3d8d57d07c4a24457fecdfd8178782cdda6dd04e8a1a9366262adb1007c2c5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8a65f2a74cfbe6bfe1733074eda8a951d2a1aeb5bce45045fe095695d8bd73cd3c3d8d57d07c4a24457fecdfd8178782cdda6dd04e8a1a9366262adb1007c2c5"' :
                                            'id="xs-components-links-module-AppModule-8a65f2a74cfbe6bfe1733074eda8a951d2a1aeb5bce45045fe095695d8bd73cd3c3d8d57d07c4a24457fecdfd8178782cdda6dd04e8a1a9366262adb1007c2c5"' }>
                                            <li class="link">
                                                <a href="components/BodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SigninComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SigninComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConvocatoriaModule.html" data-type="entity-link" >ConvocatoriaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConvocatoriaModule-99f0e1bbcbdc5a020dae730951b12ace0dc0a365830f8941b820ff2feb3ef8ff760924f6ceef9de613893f210e409c648985b1d40f01589fc1987443dc6cd65c"' : 'data-target="#xs-components-links-module-ConvocatoriaModule-99f0e1bbcbdc5a020dae730951b12ace0dc0a365830f8941b820ff2feb3ef8ff760924f6ceef9de613893f210e409c648985b1d40f01589fc1987443dc6cd65c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConvocatoriaModule-99f0e1bbcbdc5a020dae730951b12ace0dc0a365830f8941b820ff2feb3ef8ff760924f6ceef9de613893f210e409c648985b1d40f01589fc1987443dc6cd65c"' :
                                            'id="xs-components-links-module-ConvocatoriaModule-99f0e1bbcbdc5a020dae730951b12ace0dc0a365830f8941b820ff2feb3ef8ff760924f6ceef9de613893f210e409c648985b1d40f01589fc1987443dc6cd65c"' }>
                                            <li class="link">
                                                <a href="components/ApplyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConvocatoriaBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConvocatoriaBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcessToApplyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProcessToApplyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequirementsToApplyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequirementsToApplyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimelineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimelineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WhoCanApplyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WhoCanApplyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConvocatoriaRoutingModule.html" data-type="entity-link" >ConvocatoriaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-b027833387d93d90ddea6d3365a2c008a87364fc9e12255e62656aeee900a63a59c1472e0cc4b66416150410c163664b5c3bf1f8dcb4742c7232dbff5db73aae"' : 'data-target="#xs-components-links-module-SharedModule-b027833387d93d90ddea6d3365a2c008a87364fc9e12255e62656aeee900a63a59c1472e0cc4b66416150410c163664b5c3bf1f8dcb4742c7232dbff5db73aae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-b027833387d93d90ddea6d3365a2c008a87364fc9e12255e62656aeee900a63a59c1472e0cc4b66416150410c163664b5c3bf1f8dcb4742c7232dbff5db73aae"' :
                                            'id="xs-components-links-module-SharedModule-b027833387d93d90ddea6d3365a2c008a87364fc9e12255e62656aeee900a63a59c1472e0cc4b66416150410c163664b5c3bf1f8dcb4742c7232dbff5db73aae"' }>
                                            <li class="link">
                                                <a href="components/SidenavItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavUserInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavUserInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SteperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SteperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TooltipRedSmallComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TooltipRedSmallComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TooltipWhiteSmallComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TooltipWhiteSmallComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserDataPostulationModule.html" data-type="entity-link" >UserDataPostulationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserDataPostulationModule-548af7d75a954a66f2c78329834a2bc07b3ab9a1bd5b35c2e1fe1f599d474af9d4db7ca5b3728e474b5428ddd4468d2e4eef5ad1c76280f6b565bb7d529d2171"' : 'data-target="#xs-components-links-module-UserDataPostulationModule-548af7d75a954a66f2c78329834a2bc07b3ab9a1bd5b35c2e1fe1f599d474af9d4db7ca5b3728e474b5428ddd4468d2e4eef5ad1c76280f6b565bb7d529d2171"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserDataPostulationModule-548af7d75a954a66f2c78329834a2bc07b3ab9a1bd5b35c2e1fe1f599d474af9d4db7ca5b3728e474b5428ddd4468d2e4eef5ad1c76280f6b565bb7d529d2171"' :
                                            'id="xs-components-links-module-UserDataPostulationModule-548af7d75a954a66f2c78329834a2bc07b3ab9a1bd5b35c2e1fe1f599d474af9d4db7ca5b3728e474b5428ddd4468d2e4eef5ad1c76280f6b565bb7d529d2171"' }>
                                            <li class="link">
                                                <a href="components/FillFileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FillFileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadFilesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadFilesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDataPostulationBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDataPostulationBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerifyDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerifyDataComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserDataPostulationRoutingModule.html" data-type="entity-link" >UserDataPostulationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserDataRegisterModule.html" data-type="entity-link" >UserDataRegisterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserDataRegisterModule-22947513f606cc8182b1a8789ad5d5c80aef31cc05f095f69f7482da38fb3082d061bbeb0973bb4a83fd397a851158cd4bf3cdb8b1c4d0e0be0284792d7f0cb5"' : 'data-target="#xs-components-links-module-UserDataRegisterModule-22947513f606cc8182b1a8789ad5d5c80aef31cc05f095f69f7482da38fb3082d061bbeb0973bb4a83fd397a851158cd4bf3cdb8b1c4d0e0be0284792d7f0cb5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserDataRegisterModule-22947513f606cc8182b1a8789ad5d5c80aef31cc05f095f69f7482da38fb3082d061bbeb0973bb4a83fd397a851158cd4bf3cdb8b1c4d0e0be0284792d7f0cb5"' :
                                            'id="xs-components-links-module-UserDataRegisterModule-22947513f606cc8182b1a8789ad5d5c80aef31cc05f095f69f7482da38fb3082d061bbeb0973bb4a83fd397a851158cd4bf3cdb8b1c4d0e0be0284792d7f0cb5"' }>
                                            <li class="link">
                                                <a href="components/AcademicInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AcademicInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeneralInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneralInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnsaStudentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UnsaStudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserDataRegisterRoutingModule.html" data-type="entity-link" >UserDataRegisterRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/Button.html" data-type="entity-link" >Button</a>
                            </li>
                            <li class="link">
                                <a href="components/ExternalStudentComponent.html" data-type="entity-link" >ExternalStudentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TooltipRedComponent.html" data-type="entity-link" >TooltipRedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UnsaAdministrativeComponent.html" data-type="entity-link" >UnsaAdministrativeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UnsaTeacherComponent.html" data-type="entity-link" >UnsaTeacherComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthHelper.html" data-type="entity-link" >AuthHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConvocatoriaHelper.html" data-type="entity-link" >ConvocatoriaHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/SidenavHelper.html" data-type="entity-link" >SidenavHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConvocatoriaService.html" data-type="entity-link" >ConvocatoriaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidenavService.html" data-type="entity-link" >SidenavService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IConvocatoria.html" data-type="entity-link" >IConvocatoria</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SidenavItem.html" data-type="entity-link" >SidenavItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SideNavToggle.html" data-type="entity-link" >SideNavToggle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Step.html" data-type="entity-link" >Step</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});