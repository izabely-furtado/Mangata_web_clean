import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './pages/hello/hello.component';
import { GoodbyeComponent } from './pages/goodbye/goodbye.component';
import { DockModule } from 'primeng/dock';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { KnobModule } from 'primeng/knob';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { TreeSelectModule } from 'primeng/treeselect';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { ScrollerModule } from 'primeng/scroller';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PaginatorModule } from 'primeng/paginator';
import { PickListModule } from 'primeng/picklist';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TimelineModule } from 'primeng/timeline';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ChartModule } from 'primeng/chart';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DragDropModule } from 'primeng/dragdrop';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FocusTrapModule } from 'primeng/focustrap';
import { RippleModule } from 'primeng/ripple';
import { AutoFocusModule } from 'primeng/autofocus';
import { AnimateModule } from 'primeng/animate';
import { OverlayModule } from 'primeng/overlay';
import { ConfirmationService, FilterService, MessageService } from 'primeng/api';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackgroundCloudsComponent } from './components/background-clouds/background-clouds.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ImagemService } from './services/imagem.service';
import { ProdutoService } from './services/produto.service';
import { EmpresaService } from './services/empresa.service';
import { ColaboradorService } from './services/colaborador.service';
import { IngressoService } from './services/ingresso.service';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { TipoProdutoEnumMock } from './models/enum/tipo-produto';
import { ProdutoComponent } from './pages/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    GoodbyeComponent,
    MenuPrincipalComponent,
    MenuLateralComponent,
    TerminalComponent,
    FooterComponent,
    BackgroundCloudsComponent,
    PerfilComponent,
    CadastroComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    DockModule,
    ButtonModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    EditorModule,
    InputTextModule,
    RadioButtonModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextareaModule,
    InputNumberModule,
    KnobModule,
    KeyFilterModule,
    ListboxModule,
    MultiSelectModule,
    PasswordModule,
    RatingModule,
    SelectButtonModule,
    SliderModule,
    TreeSelectModule,
    ToggleButtonModule,
    SplitButtonModule,
    SpeedDialModule,
    TableModule,
    ScrollerModule,
    OrderListModule, 
    OrganizationChartModule, 
    PaginatorModule,
    PickListModule,
    TreeModule,
    TreeTableModule, 
    TimelineModule,
    AccordionModule, 
    CardModule,
    DividerModule, 
    FieldsetModule, 
    PanelModule,
    SplitterModule, 
    ScrollPanelModule, 
    TabViewModule,
    ToolbarModule,
    ConfirmDialogModule, 
    DialogModule,
    DynamicDialogModule, 
    OverlayPanelModule,
    SidebarModule,
    TooltipModule,
    FileUploadModule, 
    BreadcrumbModule,
    MenuModule,
    MenubarModule, 
    MegaMenuModule, 
    PanelMenuModule, 
    StepsModule,
    TabMenuModule, 
    TieredMenuModule, 
    ChartModule,
    MessagesModule, 
    ToastModule,
    CarouselModule, 
    GalleriaModule,
    ImageModule,
    DragDropModule, 
    AvatarModule,
    BadgeModule, 
    ChipModule,
    ScrollTopModule, 
    SkeletonModule, 
    ProgressBarModule, 
    ProgressSpinnerModule, 
    FocusTrapModule, 
    RippleModule, 
    AutoFocusModule, 
    AnimateModule, 
    OverlayModule, 
     
  ],
  providers: [
    FilterService,
    MessageService, 
    ConfirmationService,
    ColaboradorService,
    EmpresaService, 
    ImagemService,
    IngressoService,
    ProdutoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
