import { NativeScriptConfig } from '@nativescript/core';

export default {
    id: 'org.nativescript.vuedemo',
    appResourcesPath: 'App_Resources',
    profiling: 'timeline',
    android: {
        v8Flags: '--expose_gc',
        markingMode: 'none'
    }
} as NativeScriptConfig;