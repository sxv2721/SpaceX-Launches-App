import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "../../enzyme";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "../../App";
import { RoutedMission } from "../RoutedMission";
import { rootReducer } from "../rootReducer";
import { DateInput } from "../DateInput";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
describe("<App />", () => {
    describe("Router", () => {
        const composeEnhancers =
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const store = createStore(
            rootReducer,
            /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
        );

        const createWrapper = (initialRoute) => {
            if (initialRoute === "/") {
                DateInput.prototype.componentDidMount = jest.fn();
            } else {
                RoutedMission.prototype.getMission = jest.fn();
            }
            const defaultWrapper = mount(
                <Provider store={store}>
                    <MemoryRouter initialEntries={[initialRoute]}>
                        <App />
                    </MemoryRouter>
                </Provider>
            );
            return defaultWrapper;
        };
        describe("Launch Card List", () => {
            const wrapper = createWrapper("/");
            it("Should call Launch Card List with an empty route", () => {
                expect(wrapper.find(".headerTitle").exists()).toEqual(true);
            });
            it("Should contain Date Input", () => {
                expect(wrapper.find("DateInput").exists()).toEqual(true);
            });
            it("Should contain Favorites", () => {
                expect(wrapper.find("Favorites").exists()).toEqual(true);
            });
            it("Should contain Launches", () => {
                expect(wrapper.find("Launches").exists()).toEqual(true);
            });
        });
        describe("missions route", () => {
            const wrapper = createWrapper("/missions/0");
            it("Should call a routed mission with the missions route", () => {
                expect(wrapper.find("RoutedMission").exists()).toEqual(true);
            });
            it("Should not call launch card list", () => {
                expect(wrapper.find(".headerTitle").exists()).toEqual(false);
            });
        });
    });
});
