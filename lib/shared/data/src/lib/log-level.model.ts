export enum LogLevelEnum1 {
  Debug,
  Info,
  Warning,
  Error
}

export enum LogLevelEnum2 {
  Debug = 'Debug',
  Info = 'Information',
  Warning = 'Warning',
  Error = 'Error'
}

export const logLevel = {
  Debug: 'Debug',
  Info: 'Information',
  Warning: 'Warning',
  Error: 'Error'
} as const;

// type ObjectValues<T> = T[keyof T];
// export type LogLevel = ObjectValues<typeof logLevel>;
export type LogLevel = keyof typeof logLevel;

const logEnum1 = (logLevel: LogLevelEnum1, message: string): void => {
  console.log(logLevel, message);
};

const logEnum2 = (logLevel: LogLevelEnum2, message: string): void => {
  console.log(logLevel, message);
};

const log = (logLevel: LogLevel, message: string): void => {
  console.log(logLevel, message);
};

logEnum1(LogLevelEnum1.Debug, 'Debug-Message');
logEnum1(0, 'Debug-Message');
// logEnum1(LogLevelEnum2.Debug, 'Debug-Message');

logEnum2(LogLevelEnum2.Debug, 'Debug-Message');
// logEnum2("Debug", 'Debug-Message');
// logEnum2(LogLevelEnum1.Debug, 'Debug-Message');

log(logLevel.Debug, 'Debug-Message');
log('Debug', 'Debug-Message');
// log('Deebug', 'Debug-Message');
