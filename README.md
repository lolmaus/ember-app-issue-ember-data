# ember-app-issue-ember-data

This is a reproduction of an Ember Data issue with latest Embroider.

Reproduction:

```sh
pnpx ember-cli@4.12.2 new ember-app-issue-ember-data --embroider --skip-npm
cd ember-app-issue-ember-data/
pnpm i

ember b # passes

pnpm i -D @embroider/macros

ember b # fails!
```

Kudos to @nickschot for reporting and figuring out the important bit.

## Error

    ❯ ember s
    unable to resolve package @ember-data/store from /home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2


    Stack Trace and Error Report: /tmp/error.dump.21a153f0170249be90a768f55a87a12a.log


## Log

    =================================================================================

    ENV Summary:

      TIME: Wed Nov 15 2023 17:55:11 GMT+0300 (Moscow Standard Time)
      TITLE: ember
      ARGV:
      - /home/lolmaus/.volta/tools/image/node/18.18.2/bin/node
      - /home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2/node_modules/ember-cli/bin/ember
      - s
      EXEC_PATH: /home/lolmaus/.volta/tools/image/node/18.18.2/bin/node
      TMPDIR: /tmp
      SHELL: /bin/bash
      PATH:
      - /home/lolmaus/.volta/tools/image/yarn/1.22.10/bin
      - /home/lolmaus/.volta/tools/image/node/18.18.2/bin
      - /home/lolmaus/.cargo/bin
      - /home/lolmaus/.volta/bin
      - /home/lolmaus/.volta/bin
      - /usr/local/sbin
      - /usr/local/bin
      - /usr/sbin
      - /usr/bin
      - /sbin
      - /bin
      - /usr/games
      - /usr/local/games
      - /usr/lib/wsl/lib
      - /mnt/c/Program Files/Volta/
      - /mnt/c/program files/python3/scripts/
      - /mnt/c/program files/python3/
      - /mnt/c/windows/system32
      - /mnt/c/windows
      - /mnt/c/windows/system32/wbem
      - /mnt/c/windows/system32/windowspowershell/v1.0/
      - /mnt/c/users/lolmaus/appdata/roaming/nvm
      - /mnt/c/windows/system32/openssh/
      - /mnt/c/users/lolmaus/appdata/local/microsoft/windowsapps
      - /mnt/c/program files/oracle/virtualbox
      - /mnt/c/portable apps/sysinternalssuite
      - /mnt/c/portable apps/nirsoft_package_enc_1.20.39/nirsoft
      - /mnt/c/program files/docker toolbox
      - /mnt/c/users/lolmaus/appda
      - /mnt/c/program files/git/cmd
      - /mnt/c/Program Files (x86)/NVIDIA Corporation/PhysX/Common
      - /mnt/c/ProgramData/chocolatey/bin
      - /mnt/c/Program Files/nodejs/
      - /mnt/c/WINDOWS/system32
      - /mnt/c/WINDOWS
      - /mnt/c/WINDOWS/System32/Wbem
      - /mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/
      - /mnt/c/WINDOWS/System32/OpenSSH/
      - /mnt/c/Program Files/Intel/WiFi/bin/
      - /mnt/c/Program Files/Common Files/Intel/WirelessCommon/
      - /mnt/c/Program Files (x86)/Kensington/TrackballWorks
      - /mnt/c/Program Files (x86)/Yarn/bin/
      - /mnt/c/Program Files/Calibre2/
      - /mnt/c/Program Files/CMake/bin
      - /mnt/c/Program Files/Zero Install
      - /mnt/c/WINDOWS/system32
      - /mnt/c/WINDOWS
      - /mnt/c/WINDOWS/System32/Wbem
      - /mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/
      - /mnt/c/WINDOWS/System32/OpenSSH/
      - /mnt/c/Program Files/Intel/Intel(R) Memory and Storage Tool/
      - /mnt/c/Program Files/dotnet/
      - /mnt/c/Program Files (x86)/FAHClient
      - /mnt/c/Program Files/NVIDIA Corporation/NVIDIA NvDLISR
      - /mnt/c/Program Files/Docker/Docker/resources/bin
      - /mnt/c/Program Files/Mullvad VPN/resources
      - /mnt/c/Program Files/WireGuard/
      - /mnt/c/Program Files/Git/cmd
      - /mnt/c/Program Files/PowerShell/7/
      - /mnt/c/Users/lolmaus/scoop/shims
      - /mnt/c/Users/lolmaus/AppData/Local/Volta/bin
      - /mnt/c/Users/lolmaus/AppData/Local/Microsoft/WindowsApps
      - /mnt/c/Program Files/Microsoft VS Code/bin
      - /mnt/c/Program Files/Oracle/VirtualBox
      - /mnt/c/Users/lolmaus/AppData/Roaming/nvm
      - /mnt/c/Program Files/nodejs
      - /mnt/c/Portable Apps/SysinternalsSuite
      - /mnt/c/Portable Apps/nirsoft_package_enc_1.20.39/NirSoft
      - /mnt/c/Program Files/Microsoft VS Code Insiders/bin
      - /mnt/c/Users/lolmaus/AppData/Local/Programs/Microsoft VS Code Insiders/bin
      - /mnt/c/Users/lolmaus/AppData/Local/Programs/Microsoft VS Code/bin
      - /mnt/c/Users/lolmaus/AppData/Roaming/npm
      - /mnt/c/Program Files/Intel/WiFi/bin/
      - /mnt/c/Program Files/Common Files/Intel/WirelessCommon/
      - /mnt/c/Users/lolmaus/AppData/Local/GitHubDesktop/bin
      - /mnt/c/Users/lolmaus/AppData/Local/Yarn/bin
      - /mnt/c/Program Files (x86)/Notepad++
      - /mnt/c/Program Files (x86)/FAHClient
      - /mnt/c/Users/lolmaus/AppData/Local/Microsoft/WindowsApps
      - /mnt/c/Program Files (x86)/GitHub CLI/
      - /mnt/c/Program Files/JetBrains/IntelliJ IDEA 2020.3.3/bin
      - /mnt/c/Program Files (x86)/BrowserStackLocal/
      - /mnt/c/Program Files/JetBrains/WebStorm 221.4501.160/bin
      - /mnt/c/Program Files/JetBrains/IntelliJ IDEA 2022.1.2/bin
      - /mnt/c/Users/lolmaus/AppData/Local/JetBrains/Toolbox/scripts
      - /snap/bin
      - /home/lolmaus/.local/bin
      - /home/lolmaus/.local/bin
      PLATFORM: linux x64
      FREEMEM: 24569479168
      TOTALMEM: 33632305152
      UPTIME: 110253.21
      LOADAVG: 0.38,0.47,0.41
      CPUS:
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      - AMD Ryzen 7 2700X Eight-Core Processor - 3700
      ENDIANNESS: LE
      VERSIONS:
      - acorn: 8.10.0
      - ada: 2.6.0
      - ares: 1.19.1
      - brotli: 1.0.9
      - cldr: 43.1
      - icu: 73.2
      - llhttp: 6.0.11
      - modules: 108
      - napi: 9
      - nghttp2: 1.57.0
      - nghttp3: 0.7.0
      - ngtcp2: 0.8.1
      - node: 18.18.2
      - openssl: 3.0.10+quic
      - simdutf: 3.2.14
      - tz: 2023c
      - undici: 5.26.3
      - unicode: 15.0
      - uv: 1.44.2
      - uvwasi: 0.0.18
      - v8: 10.2.154.26-node.26
      - zlib: 1.2.13.1-motley

    ERROR Summary:

      - broccoliBuilderErrorStack: [undefined]
      - code: MODULE_NOT_FOUND
      - codeFrame: [undefined]
      - errorMessage: unable to resolve package @ember-data/store from /home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2
      - errorType: [undefined]
      - location:
        - column: [undefined]
        - file: [undefined]
        - line: [undefined]
      - message: unable to resolve package @ember-data/store from /home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2
      - name: Error
      - nodeAnnotation: [undefined]
      - nodeName: [undefined]
      - originalErrorMessage: [undefined]
      - stack: Error: unable to resolve package @ember-data/store from /home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2
        at PackageCache.resolve (/home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2/node_modules/.pnpm/@embroider+shared-internals@2.5.1_supports-color@8.1.1/node_modules/@embroider/shared-internals/src/package-cache.js:52:21)
        at RewrittenPackageCache.resolve (/home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2/node_modules/.pnpm/@embroider+shared-internals@2.5.1_supports-color@8.1.1/node_modules/@embroider/shared-internals/src/rewritten-package-cache.js:41:62)
        at MacrosConfig.resolvePackage (/home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2/node_modules/.pnpm/@embroider+macros@1.13.3/node_modules/@embroider/macros/src/macros-config.js:344:44)
        at MacrosConfig.internalSetConfig (/home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2/node_modules/.pnpm/@embroider+macros@1.13.3/node_modules/@embroider/macros/src/macros-config.js:170:34)
        at MacrosConfig.setConfig (/home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2/node_modules/.pnpm/@embroider+macros@1.13.3/node_modules/@embroider/macros/src/macros-config.js:141:21)
        at Class.included (/home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2/node_modules/.pnpm/@embroider+macros@1.13.3/node_modules/@embroider/macros/src/ember-addon-main.js:30:30)
        at Class.superWrapper [as included] (/home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2/node_modules/.pnpm/core-object@3.1.5/node_modules/core-object/lib/assign-properties.js:34:20)
        at /home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2/node_modules/.pnpm/ember-cli@4.12.2/node_modules/ember-cli/lib/broccoli/ember-app.js:721:15
        at Array.forEach (<anonymous>)
        at EmberApp._notifyAddonIncluded (/home/lolmaus/Code/mainmatter/mainmatter/ember-app-issue-ember-data-2/node_modules/.pnpm/ember-cli@4.12.2/node_modules/ember-cli/lib/broccoli/ember-app.js:719:25)

    =================================================================================
