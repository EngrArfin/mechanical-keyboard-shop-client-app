import { useEffect } from "react";
import LandingPageLayout from "./components/layout/LandingPageLayout";
import { useAppDispatch } from "./redux/hooks";
import { initializeAuth } from "./redux/features/authSlice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return (
    <div>
      <LandingPageLayout></LandingPageLayout>
    </div>
  );
};

export default App;
