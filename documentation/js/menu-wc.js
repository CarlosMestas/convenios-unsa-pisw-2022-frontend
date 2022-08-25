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
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-495e098e952f3861126b5a4f871e1c2620fefbee2394255a05479fc2097a6a4c87354e1bb3be51f1b0f3d5af176a00c139f7221788ec5854485c1f98d097bd1a"' : 'data-target="#xs-components-links-module-AdminModule-495e098e952f3861126b5a4f871e1c2620fefbee2394255a05479fc2097a6a4c87354e1bb3be51f1b0f3d5af176a00c139f7221788ec5854485c1f98d097bd1a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-495e098e952f3861126b5a4f871e1c2620fefbee2394255a05479fc2097a6a4c87354e1bb3be51f1b0f3d5af176a00c139f7221788ec5854485c1f98d097bd1a"' :
                                            'id="xs-components-links-module-AdminModule-495e098e952f3861126b5a4f871e1c2620fefbee2394255a05479fc2097a6a4c87354e1bb3be51f1b0f3d5af176a00c139f7221788ec5854485c1f98d097bd1a"' }>
                                            <li class="link">
                                                <a href="components/AdminBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-fce9542538793186685c7f257d374f854bf04923d3b4e431f9ac662cbbe7d1fdef7c67a01d6e3c6c48f6f2e8df8358fc61a3696d0a363381b206279cab2b4e90"' : 'data-target="#xs-components-links-module-AppModule-fce9542538793186685c7f257d374f854bf04923d3b4e431f9ac662cbbe7d1fdef7c67a01d6e3c6c48f6f2e8df8358fc61a3696d0a363381b206279cab2b4e90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fce9542538793186685c7f257d374f854bf04923d3b4e431f9ac662cbbe7d1fdef7c67a01d6e3c6c48f6f2e8df8358fc61a3696d0a363381b206279cab2b4e90"' :
                                            'id="xs-components-links-module-AppModule-fce9542538793186685c7f257d374f854bf04923d3b4e431f9ac662cbbe7d1fdef7c67a01d6e3c6c48f6f2e8df8358fc61a3696d0a363381b206279cab2b4e90"' }>
                                            <li class="link">
                                                <a href="components/BodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OfHomeCarouselNewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OfHomeCarouselNewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OfHomeTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OfHomeTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OfHomeTableProgramsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OfHomeTableProgramsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestAccessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestAccessComponent</a>
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
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/uploadPhotoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >uploadPhotoComponent</a>
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
                                            'data-target="#components-links-module-ConvocatoriaModule-e8da5c26775dc02ef6d471cfdc53c67ca3de1c76c5d10b7633558169fabfdb5701a840b65509c7cf1e61f6ad36610ada227e5f2b9e044c5522848f136e18ebf8"' : 'data-target="#xs-components-links-module-ConvocatoriaModule-e8da5c26775dc02ef6d471cfdc53c67ca3de1c76c5d10b7633558169fabfdb5701a840b65509c7cf1e61f6ad36610ada227e5f2b9e044c5522848f136e18ebf8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConvocatoriaModule-e8da5c26775dc02ef6d471cfdc53c67ca3de1c76c5d10b7633558169fabfdb5701a840b65509c7cf1e61f6ad36610ada227e5f2b9e044c5522848f136e18ebf8"' :
                                            'id="xs-components-links-module-ConvocatoriaModule-e8da5c26775dc02ef6d471cfdc53c67ca3de1c76c5d10b7633558169fabfdb5701a840b65509c7cf1e61f6ad36610ada227e5f2b9e044c5522848f136e18ebf8"' }>
                                            <li class="link">
                                                <a href="components/ApplyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConvocatoriaBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConvocatoriaBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimelineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimelineComponent</a>
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
                                            'data-target="#components-links-module-SharedModule-6cdc1332fcadc7486cab6f9659a935b0ab9ddfc72e07e6d79d9de2293183ffa9d0640421f1c0355f2676a35d4d2568516976bd4268630b8b6b47780544829e1a"' : 'data-target="#xs-components-links-module-SharedModule-6cdc1332fcadc7486cab6f9659a935b0ab9ddfc72e07e6d79d9de2293183ffa9d0640421f1c0355f2676a35d4d2568516976bd4268630b8b6b47780544829e1a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-6cdc1332fcadc7486cab6f9659a935b0ab9ddfc72e07e6d79d9de2293183ffa9d0640421f1c0355f2676a35d4d2568516976bd4268630b8b6b47780544829e1a"' :
                                            'id="xs-components-links-module-SharedModule-6cdc1332fcadc7486cab6f9659a935b0ab9ddfc72e07e6d79d9de2293183ffa9d0640421f1c0355f2676a35d4d2568516976bd4268630b8b6b47780544829e1a"' }>
                                            <li class="link">
                                                <a href="components/Button.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Button</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonCustomizedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonCustomizedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogErrorEmailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogErrorEmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogYesNoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogYesNoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchBarComponent</a>
                                            </li>
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
                                            'data-target="#components-links-module-UserDataPostulationModule-b8f3ba6ebdbfa33451759d904a99ba7178b1d4adea2bdf2997c3fb37bf4218bab6fb4442cdf4208408925d8c55171130877775d1942c3ecc3466676f58f29c14"' : 'data-target="#xs-components-links-module-UserDataPostulationModule-b8f3ba6ebdbfa33451759d904a99ba7178b1d4adea2bdf2997c3fb37bf4218bab6fb4442cdf4208408925d8c55171130877775d1942c3ecc3466676f58f29c14"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserDataPostulationModule-b8f3ba6ebdbfa33451759d904a99ba7178b1d4adea2bdf2997c3fb37bf4218bab6fb4442cdf4208408925d8c55171130877775d1942c3ecc3466676f58f29c14"' :
                                            'id="xs-components-links-module-UserDataPostulationModule-b8f3ba6ebdbfa33451759d904a99ba7178b1d4adea2bdf2997c3fb37bf4218bab6fb4442cdf4208408925d8c55171130877775d1942c3ecc3466676f58f29c14"' }>
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
                                            'data-target="#components-links-module-UserDataRegisterModule-3636a5fe04f2c3ba7dd76403f3b6b350bc37821f7f0654f75ed8b7d389e9f18e0f1e73a64daf90ca937b1982b073f68872328651dac7cfb456ede6371e85f77e"' : 'data-target="#xs-components-links-module-UserDataRegisterModule-3636a5fe04f2c3ba7dd76403f3b6b350bc37821f7f0654f75ed8b7d389e9f18e0f1e73a64daf90ca937b1982b073f68872328651dac7cfb456ede6371e85f77e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserDataRegisterModule-3636a5fe04f2c3ba7dd76403f3b6b350bc37821f7f0654f75ed8b7d389e9f18e0f1e73a64daf90ca937b1982b073f68872328651dac7cfb456ede6371e85f77e"' :
                                            'id="xs-components-links-module-UserDataRegisterModule-3636a5fe04f2c3ba7dd76403f3b6b350bc37821f7f0654f75ed8b7d389e9f18e0f1e73a64daf90ca937b1982b073f68872328651dac7cfb456ede6371e85f77e"' }>
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
                                <a href="components/ButtonCustomized.html" data-type="entity-link" >ButtonCustomized</a>
                            </li>
                            <li class="link">
                                <a href="components/ExternalStudentComponent.html" data-type="entity-link" >ExternalStudentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OfHomeCarouselNews.html" data-type="entity-link" >OfHomeCarouselNews</a>
                            </li>
                            <li class="link">
                                <a href="components/OfHomeTable.html" data-type="entity-link" >OfHomeTable</a>
                            </li>
                            <li class="link">
                                <a href="components/OfHomeTablePrograms.html" data-type="entity-link" >OfHomeTablePrograms</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchBar.html" data-type="entity-link" >SearchBar</a>
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
                                <a href="classes/ConvocationHelper.html" data-type="entity-link" >ConvocationHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/IPostulacion.html" data-type="entity-link" >IPostulacion</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostulacionHelper.html" data-type="entity-link" >PostulacionHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileHelper.html" data-type="entity-link" >ProfileHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProgramaProfesional.html" data-type="entity-link" >ProgramaProfesional</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProgramaProfesionalHelper.html" data-type="entity-link" >ProgramaProfesionalHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/Semestre.html" data-type="entity-link" >Semestre</a>
                            </li>
                            <li class="link">
                                <a href="classes/SemestreHelper.html" data-type="entity-link" >SemestreHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/SidenavHelper.html" data-type="entity-link" >SidenavHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/TipoDocumento.html" data-type="entity-link" >TipoDocumento</a>
                            </li>
                            <li class="link">
                                <a href="classes/TipoDocumentoHelper.html" data-type="entity-link" >TipoDocumentoHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeIdentification.html" data-type="entity-link" >TypeIdentification</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeProfile.html" data-type="entity-link" >TypeProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeProfileHelper.html" data-type="entity-link" >TypeProfileHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeUserIdentificationHelper.html" data-type="entity-link" >TypeUserIdentificationHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserData.html" data-type="entity-link" >UserData</a>
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
                                    <a href="injectables/ConvocationEffect.html" data-type="entity-link" >ConvocationEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConvocationService.html" data-type="entity-link" >ConvocationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostulacionService.html" data-type="entity-link" >PostulacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileEffect.html" data-type="entity-link" >ProfileEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link" >ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProgramaProfesionalService.html" data-type="entity-link" >ProgramaProfesionalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SemestreService.html" data-type="entity-link" >SemestreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidenavService.html" data-type="entity-link" >SidenavService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TipoDocumentoService.html" data-type="entity-link" >TipoDocumentoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypeProfileService.html" data-type="entity-link" >TypeProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypeUserIdentificationService.html" data-type="entity-link" >TypeUserIdentificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserAuthEffect.html" data-type="entity-link" >UserAuthEffect</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
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
                            <li class="link">
                                <a href="guards/UserProfileCreatedGuard.html" data-type="entity-link" >UserProfileCreatedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserSignedGuard.html" data-type="entity-link" >UserSignedGuard</a>
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
                                <a href="interfaces/ConvElement.html" data-type="entity-link" >ConvElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConvElement-1.html" data-type="entity-link" >ConvElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConvocationFetchTransactionResponse.html" data-type="entity-link" >ConvocationFetchTransactionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppState.html" data-type="entity-link" >IAppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConvocation.html" data-type="entity-link" >IConvocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConvocationPIVE.html" data-type="entity-link" >IConvocationPIVE</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConvocationPIVEFetchTransactionResponse.html" data-type="entity-link" >IConvocationPIVEFetchTransactionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConvocationState.html" data-type="entity-link" >IConvocationState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConvocationType.html" data-type="entity-link" >IConvocationType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDocument.html" data-type="entity-link" >IDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDocumentType.html" data-type="entity-link" >IDocumentType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEventType.html" data-type="entity-link" >IEventType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProfile.html" data-type="entity-link" >IProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProfileGetResponse.html" data-type="entity-link" >IProfileGetResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProfileState.html" data-type="entity-link" >IProfileState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProfileType.html" data-type="entity-link" >IProfileType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProgramaProfesional.html" data-type="entity-link" >IProgramaProfesional</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequirement.html" data-type="entity-link" >IRequirement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISemestre.html" data-type="entity-link" >ISemestre</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITipoDocumento.html" data-type="entity-link" >ITipoDocumento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITransactionResponse.html" data-type="entity-link" >ITransactionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITypeProfile.html" data-type="entity-link" >ITypeProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITypeProfileResponse.html" data-type="entity-link" >ITypeProfileResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITypeUserIdentificationResponse.html" data-type="entity-link" >ITypeUserIdentificationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserAuthState.html" data-type="entity-link" >IUserAuthState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserData.html" data-type="entity-link" >IUserData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserFetchResponse.html" data-type="entity-link" >IUserFetchResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserIdentification.html" data-type="entity-link" >IUserIdentification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserIdentificationType.html" data-type="entity-link" >IUserIdentificationType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserInstitionalEmailRegister.html" data-type="entity-link" >IUserInstitionalEmailRegister</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserLoginResponse.html" data-type="entity-link" >IUserLoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserLogoutResponse.html" data-type="entity-link" >IUserLogoutResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserRegisterResponse.html" data-type="entity-link" >IUserRegisterResponse</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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