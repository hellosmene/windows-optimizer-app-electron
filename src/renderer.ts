import './index.css';
import './assets/styles/typography.css';
import './assets/styles/common.css';
import './app';

// import WinApi from 'winapinode';

// WinApi.initializeEnv()
//     .then(() => {
//         WinApi.invokeNative("", WinApi.NodeBindingEnum.GET_INTEGER_REGISTRY_VALUE, 0x80000001, "SOFTWARE\\Kitware\\CMake", "Installed")
//             .then((val) => console.log(`The registry value is ${val}`))
//             .catch(err => console.error(err.getDescription()));
//     })
//     .catch(err => console.error(`WinApi cannot be initialized due to: ${err.getDescription()}`));
