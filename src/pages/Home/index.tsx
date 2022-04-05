import { Button, Fade, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useRef } from "react";
import { BotStateContext } from "../../context/BotStateContext";
import { MessageLogContext } from "../../context/MessageLogContext";
import { useTranslation } from "react-i18next";
import "./index.scss";

const Home = () => {
  const botStateContext = useContext(BotStateContext);
  const messageLogContext = useContext(MessageLogContext);
  const { t } = useTranslation();

  const msgRef = useRef<HTMLDivElement | null>(null);

  const initialMessage = t("page.home.initial_message");

  // Scroll to the bottom of the message log window when new messages are added.
  useEffect(() => {
    if (msgRef) {
      const bottom: number = msgRef.current!!.scrollHeight - msgRef.current!!.clientHeight;
      msgRef.current!!.scrollTo(0, bottom);
    }
  }, [messageLogContext.messageLog]);

  // Reset message log and then start the bot process. Actual logic is based in Start.tsx component.
  const handleStart = () => {
    messageLogContext.setMessageLog([]);
    messageLogContext.setAsyncMessages([]);
    botStateContext.setStartBot(true);
    botStateContext.setStopBot(false);
  };

  // Stop the bot process. Actual logic is based in Start.tsx component.
  const handleStop = () => {
    botStateContext.setStartBot(false);
    botStateContext.setStopBot(true);
  };

  return (
    <Fade in={true}>
      <Box
        className={
          botStateContext.settings.misc.guiLowPerformanceMode
            ? "homeContainerLowPerformance"
            : "homeContainer"
        }
        id="homeContainer"
      >
        <Stack direction="row" sx={{ height: "100%" }}>
          <div className="logOuterContainer">
            <div ref={msgRef} className="logInnerContainer">
              <p id="log">{initialMessage + messageLogContext.messageLog.join("\r")}</p>
            </div>
          </div>
          <div className="rightOuterContainer">
            <div className="rightContainer">
              {botStateContext.isBotRunning ? (
                <Button color="error" variant="contained" onClick={handleStop}>
                  {t("page.home.stop")}
                </Button>
              ) : (
                <Button
                  disabled={!botStateContext.readyStatus}
                  variant="contained"
                  onClick={handleStart}
                >
                  {botStateContext.readyStatus ? t("page.home.start") : t("page.common.not_ready")}
                </Button>
              )}
            </div>
          </div>
        </Stack>
      </Box>
    </Fade>
  );
};

export default Home;
