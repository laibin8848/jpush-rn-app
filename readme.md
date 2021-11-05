# 整合极光推送的RN app demo
```
react-native init app --version 0.64.2

0.64.2对应android sdk

android 10.0 api level(29)
android emulator 30.0.0
platform-tools 29.0.6
tools 26.0.0


buildToolsVersion = "29.0.3"
minSdkVersion = 21
compileSdkVersion = 29
targetSdkVersion = 29
ndkVersion = "20.1.5948944"
```

# 对应build.gradle文件为
```
buildscript {
    ext {
        buildToolsVersion = "29.0.3"
        minSdkVersion = 21
        compileSdkVersion = 29
        targetSdkVersion = 29
        ndkVersion = "20.1.5948944"
    }
    repositories {
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' } 
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public' } 
        // google()
        // jcenter()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:4.1.0")
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
allprojects {
    repositories {
        mavenLocal()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url("$rootDir/../node_modules/react-native/android")
        }
        maven {
            // Android JSC is installed from npm
            url("$rootDir/../node_modules/jsc-android/dist")
        }
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' } 
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public' } 
        // google()
        // jcenter()
        maven { url 'https://www.jitpack.io' }
    }
}
```