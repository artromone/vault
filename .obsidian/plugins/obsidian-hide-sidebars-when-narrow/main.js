/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => HideSidebarsOnWindowResizePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  leftMinWidth: 1400,
  rightMinWidth: 1100,
  showSidebarsBack: true
};
var SettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app2, plugin) {
    super(app2, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h3", { text: "Hide Sidebars on Window Resize" });
    new import_obsidian.Setting(containerEl).setName("Hide the left sidebar when the window is this narrow").setDesc(
      "Increase this to hide the left sidebar sooner; decrease it to delay hiding"
    ).addText(
      (text) => text.setPlaceholder(`Default: ${DEFAULT_SETTINGS.leftMinWidth}`).setValue(this.plugin.settings.leftMinWidth.toString()).onChange(async (value) => {
        const num = parseInt(value);
        if (num) {
          this.plugin.settings.leftMinWidth = num;
        } else {
          this.plugin.settings.leftMinWidth = DEFAULT_SETTINGS.leftMinWidth;
        }
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Hide the right sidebar when the window is this narrow").setDesc(
      "Increase this to hide the right sidebar sooner; decrease it to delay hiding"
    ).addText(
      (text) => text.setPlaceholder(
        `Default: ${DEFAULT_SETTINGS.rightMinWidth}`
      ).setValue(this.plugin.settings.rightMinWidth.toString()).onChange(async (value) => {
        const num = parseInt(value);
        if (num) {
          this.plugin.settings.rightMinWidth = num;
        } else {
          this.plugin.settings.rightMinWidth = DEFAULT_SETTINGS.rightMinWidth;
        }
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(this.containerEl).setName("Show sidebars back when window becomes wide again").setDesc("Sidebars remain hidden if option is disabled").addToggle((component) => {
      component.setValue(this.plugin.settings.showSidebarsBack);
      component.onChange((value) => {
        this.plugin.settings.showSidebarsBack = value;
        this.plugin.saveSettings();
      });
    });
  }
};

// src/main.ts
var HideSidebarsOnWindowResizePlugin = class extends import_obsidian2.Plugin {
  async onload() {
    console.log("loading HideSidebarsOnWindowResizePlugin");
    await this.loadSettings();
    this.addSettingTab(new SettingsTab(this.app, this));
    this.app.workspace.onLayoutReady(() => {
      this.previousWidth = window.innerWidth;
      this.toggleSidebars();
      app.workspace.on("resize", () => this.toggleSidebars());
    });
  }
  toggleSidebars() {
    const width = window.innerWidth;
    if (width < this.settings.leftMinWidth && width < this.previousWidth && !this.app.workspace.leftSplit.collapsed) {
      this.app.workspace.leftSplit.collapse();
    } else if (width > this.settings.leftMinWidth && width > this.previousWidth && this.app.workspace.leftSplit.collapsed && this.settings.showSidebarsBack) {
      this.app.workspace.leftSplit.expand();
    }
    if (width < this.settings.rightMinWidth && width < this.previousWidth && !this.app.workspace.rightSplit.collapsed) {
      this.app.workspace.rightSplit.collapse();
    } else if (width > this.settings.rightMinWidth && width > this.previousWidth && this.app.workspace.rightSplit.collapsed && this.settings.showSidebarsBack) {
      this.app.workspace.rightSplit.expand();
    }
    this.previousWidth = width;
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.toggleSidebars();
  }
};
