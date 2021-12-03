import {Attributes, FileEntry} from "ssh2-streams";
import {FileItem} from "../backend/device-manager/file-session";

export interface CrashReportEntry {
  device: string;
  path: string;
}

export interface SystemInfo {
  core_os_kernel_version?: string
  core_os_name?: string
  core_os_release?: string
  core_os_release_codename?: string
  encryption_key_type?: string
  webos_api_version?: string
  webos_build_datetime?: string
  webos_build_id?: string
  webos_imagename?: string
  webos_manufacturing_version?: string
  webos_name: string
  webos_prerelease?: string
  webos_release: string
  webos_release_codename?: string
}

export interface Shell {
  readonly closed: boolean
  readonly dumb: boolean;

  write(data: string): void;

  on(event: 'close' | 'data', callback: (...args: any[]) => void): this;

  close(): void;
}

export interface FileSession {

  readdir(location: string): Promise<FileEntry[]>;

  readdir_ext(location: string): Promise<FileItem[]>;

  readlink(path: string): Promise<string>;

  stat(path: string): Promise<Attributes>;

  rm(path: string, recursive: boolean): Promise<void>;

  get(remotePath: string, localPath: string): Promise<void>;

  put(localPath: string, remotePath: string): Promise<void>;

  downloadTemp(remotePath: string): Promise<string>;

  end(): void;
}

export interface DevicePrivateKey {
  data: string;
  privatePEM?: string;
}

export interface PackageInfo {
  id: string;
  type: string;
  title: string;
  appDescription?: string;
  vendor: string;
  version: string;
  folderPath: string;
  icon: string;
  iconPath: string;
}
