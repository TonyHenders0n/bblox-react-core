import { ReactElement } from "react";
import { SettingValuesOverride, Settings, SettingsOptionValue } from '~/types/settings';
 
 

/**
 *
 */
export interface OptionsComponent<T> {
  onChange?: (value: T) => void;
  value?: T;
  options?: SettingsOptionValue<T>[];
}

/**
 *
 */
export interface SettingsDrawerProps {
  valuesOverride?: SettingValuesOverride[];
  canReset?: boolean;
  onClose?: () => void;
  onReset?: () => void;
  onUpdate?: (settings: Settings) => void;
  open?: boolean;
  values?: Settings;
}

 