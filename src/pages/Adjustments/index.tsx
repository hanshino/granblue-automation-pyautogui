import { BotStateContext } from "../../context/BotStateContext";
import {
  Box,
  Checkbox,
  Divider,
  Fade,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import "./index.scss";

const Adjustments = () => {
  const bsc = useContext(BotStateContext);

  const renderStart = () => {
    return (
      <div>
        <Divider>
          <Typography variant="h6" component="div" className="sectionTitle">
            Calibration
          </Typography>
        </Divider>

        <FormGroup sx={{ paddingBottom: "16px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={bsc.settings.adjustment.enableCalibrationAdjustment}
                onChange={e => {
                  bsc.setSettings({
                    ...bsc.settings,
                    adjustment: {
                      ...bsc.settings.adjustment,
                      enableCalibrationAdjustment: e.target.checked,
                    },
                  });
                }}
              />
            }
            label="Enable Calibration Adjustments"
          />
          <FormHelperText>Enable adjustment of tries for Calibration.</FormHelperText>
        </FormGroup>

        {bsc.settings.adjustment.enableCalibrationAdjustment ? (
          <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6}>
              <TextField
                label="Home Calibration"
                value={bsc.settings.adjustment.adjustCalibration}
                onChange={e => {
                  bsc.setSettings({
                    ...bsc.settings,
                    adjustment: {
                      ...bsc.settings.adjustment,
                      adjustCalibration: Number(e.target.value),
                    },
                  });
                }}
                variant="outlined"
                type="number"
                inputProps={{ min: 1, max: 999 }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                }}
                helperText="Home calibration occurs when the bot is first started and attempts to find and save the location of the game window."
                fullWidth
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={6} />
          </Grid>
        ) : null}
      </div>
    );
  };

  const renderGeneral = () => {
    return (
      <div>
        <Divider sx={{ marginBottom: "16px" }}>
          <Typography variant="h6" component="div" className="sectionTitle">
            General Image Searching
          </Typography>
        </Divider>

        <FormGroup sx={{ paddingBottom: "16px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={bsc.settings.adjustment.enableGeneralAdjustment}
                onChange={e => {
                  bsc.setSettings({
                    ...bsc.settings,
                    adjustment: {
                      ...bsc.settings.adjustment,
                      enableGeneralAdjustment: e.target.checked,
                    },
                  });
                }}
              />
            }
            label="Enable General Image Searching Adjustments"
          />
          <FormHelperText>
            Enable adjustment of tries for General. This encompasses a vast majority of the image
            processing operations of the bot so adjusting these will greatly affect the average
            running time.
          </FormHelperText>
        </FormGroup>

        {bsc.settings.adjustment.enableGeneralAdjustment ? (
          <div>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="General Image Template Matching for Buttons"
                  value={bsc.settings.adjustment.adjustButtonSearchGeneral}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustButtonSearchGeneral: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for overall button template matching. This will be overwritten by the specific settings down below if applicable."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="General Image Template Matching for Headers"
                  value={bsc.settings.adjustment.adjustHeaderSearchGeneral}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustHeaderSearchGeneral: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for overall header template matching. This will be overwritten by the specific settings down below if applicable."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>
          </div>
        ) : null}
      </div>
    );
  };

  const renderPendingBattles = () => {
    return (
      <div>
        <Divider sx={{ marginBottom: "16px" }}>
          <Typography variant="h6" component="div" className="sectionTitle">
            Check for Pending Battles
          </Typography>
        </Divider>

        <FormGroup sx={{ paddingBottom: "16px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={bsc.settings.adjustment.enablePendingBattleAdjustment}
                onChange={e => {
                  bsc.setSettings({
                    ...bsc.settings,
                    adjustment: {
                      ...bsc.settings.adjustment,
                      enablePendingBattleAdjustment: e.target.checked,
                    },
                  });
                }}
              />
            }
            label="Enable Pending Battles Adjustments"
          />
          <FormHelperText>Enable adjustment of tries of check for Pending Battles.</FormHelperText>
        </FormGroup>

        {bsc.settings.adjustment.enablePendingBattleAdjustment ? (
          <div>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Delay Before Starting Check"
                  value={bsc.settings.adjustment.adjustBeforePendingBattle}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustBeforePendingBattle: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">seconds</InputAdornment>,
                  }}
                  helperText="Set the default number of seconds before starting the check for Pending Battles."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Check for Pending Battles"
                  value={bsc.settings.adjustment.adjustPendingBattle}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustPendingBattle: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries to check for Pending Battles."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>
          </div>
        ) : null}
      </div>
    );
  };

  const renderCaptcha = () => {
    return (
      <div>
        <Divider sx={{ marginBottom: "16px" }}>
          <Typography variant="h6" component="div" className="sectionTitle">
            Check for CAPTCHA
          </Typography>
        </Divider>

        <FormGroup sx={{ paddingBottom: "16px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={bsc.settings.adjustment.enableCaptchaAdjustment}
                onChange={e => {
                  bsc.setSettings({
                    ...bsc.settings,
                    adjustment: {
                      ...bsc.settings.adjustment,
                      enableCaptchaAdjustment: e.target.checked,
                    },
                  });
                }}
              />
            }
            label="Enable CAPTCHA Adjustments"
          />
          <FormHelperText>Enable adjustment of tries of check for CAPTCHA.</FormHelperText>
        </FormGroup>

        {bsc.settings.adjustment.enableCaptchaAdjustment ? (
          <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6}>
              <TextField
                label="Check for CAPTCHA"
                value={bsc.settings.adjustment.adjustCaptcha}
                onChange={e => {
                  bsc.setSettings({
                    ...bsc.settings,
                    adjustment: {
                      ...bsc.settings.adjustment,
                      adjustCaptcha: Number(e.target.value),
                    },
                  });
                }}
                variant="outlined"
                type="number"
                inputProps={{ min: 1, max: 999 }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                }}
                helperText="Set the default number of tries to check for CAPTCHA."
                fullWidth
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={6} />
          </Grid>
        ) : null}
      </div>
    );
  };

  const renderSupportSummonSelection = () => {
    return (
      <div>
        <Divider sx={{ marginBottom: "16px" }}>
          <Typography variant="h6" component="div" className="sectionTitle">
            Support Summon Selection Screen
          </Typography>
        </Divider>

        <FormGroup sx={{ paddingBottom: "16px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={bsc.settings.adjustment.enableSupportSummonSelectionScreenAdjustment}
                onChange={e => {
                  bsc.setSettings({
                    ...bsc.settings,
                    adjustment: {
                      ...bsc.settings.adjustment,
                      enableSupportSummonSelectionScreenAdjustment: e.target.checked,
                    },
                  });
                }}
              />
            }
            label="Enable Summon Selection Screen Adjustments"
          />
          <FormHelperText>
            Enable adjustment of tries for Support Summon Selection Screen.
          </FormHelperText>
        </FormGroup>

        {bsc.settings.adjustment.enableSupportSummonSelectionScreenAdjustment ? (
          <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6}>
              <TextField
                label="Arrival at Support Summon Selection screen"
                value={bsc.settings.adjustment.adjustSupportSummonSelectionScreen}
                onChange={e => {
                  bsc.setSettings({
                    ...bsc.settings,
                    adjustment: {
                      ...bsc.settings.adjustment,
                      adjustSupportSummonSelectionScreen: Number(e.target.value),
                    },
                  });
                }}
                variant="outlined"
                type="number"
                inputProps={{ min: 1, max: 999 }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                }}
                helperText="Set the default number of tries to check if the bot arrived at the Support Summon Selection screen."
                fullWidth
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={6} />
          </Grid>
        ) : null}
      </div>
    );
  };

  const renderCombatMode = () => {
    return (
      <div>
        <Divider sx={{ marginBottom: "16px" }}>
          <Typography variant="h6" component="div" className="sectionTitle">
            Combat Mode
          </Typography>
        </Divider>

        <FormGroup sx={{ paddingBottom: "16px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={bsc.settings.adjustment.enableCombatModeAdjustment}
                onChange={e => {
                  bsc.setSettings({
                    ...bsc.settings,
                    adjustment: {
                      ...bsc.settings.adjustment,
                      enableCombatModeAdjustment: e.target.checked,
                    },
                  });
                }}
              />
            }
            label="Enable Combat Mode Adjustments"
          />
          <FormHelperText>Enable adjustment of tries for Combat Mode Adjustments.</FormHelperText>
        </FormGroup>

        {bsc.settings.adjustment.enableCombatModeAdjustment ? (
          <div>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Arrival at Combat Screen"
                  value={bsc.settings.adjustment.adjustCombatStart}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustCombatStart: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for checking when the bot arrives at the Combat Screen."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Check for Dialog Popups"
                  value={bsc.settings.adjustment.adjustDialog}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustDialog: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for checking when a dialog popup from Lyria/Vyrn is present during combat."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Skill Usage"
                  value={bsc.settings.adjustment.adjustSkillUsage}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustSkillUsage: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for checking when a skill is used."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Summon Usage"
                  value={bsc.settings.adjustment.adjustSummonUsage}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustSummonUsage: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for checking when a Summon is used."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Waiting for Reload"
                  value={bsc.settings.adjustment.adjustWaitingForReload}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustWaitingForReload: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">seconds</InputAdornment>,
                  }}
                  helperText="Set the default number of seconds for checking when a reload is finished, whether or not the bot ends up back at the Combat screen or the Loot Collection screen."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Waiting for Attack"
                  value={bsc.settings.adjustment.adjustWaitingForAttack}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustWaitingForAttack: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for checking when an attack is finished after the Attack button is pressed."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Check for No Loot Screen"
                  value={bsc.settings.adjustment.adjustCheckForNoLootScreen}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustCheckForNoLootScreen: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for the frequent checking of the No Loot screen during Combat Mode. This occurs when the bot just joined a raid and takes an action but the boss died already in the process of loading into the raid. This influences when the bot gets to reload the page."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Check for Battle Concluded Popup"
                  value={bsc.settings.adjustment.adjustCheckForBattleConcludedPopup}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustCheckForBattleConcludedPopup: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for the frequent checking of the Battle Concluded popup during Combat Mode. This occurs when the bot takes an action but the boss died at that exact moment. This influences when the bot gets to reload the page."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Check for Exp Gained Popup"
                  value={bsc.settings.adjustment.adjustCheckForExpGainedPopup}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustCheckForExpGainedPopup: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for the frequent checking of the Exp Gained popup after Combat Mode on the Loot Collection screen. This influences when the bot gets to reload the page."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Check for Loot Collection Screen"
                  value={bsc.settings.adjustment.adjustCheckForLootCollectionScreen}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustCheckForLootCollectionScreen: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for the frequent checking if the bot arrived at the Loot Collection screen after Combat Mode. This influences when the bot gets to reload the page."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>
          </div>
        ) : null}
      </div>
    );
  };

  const renderArcarum = () => {
    return (
      <div>
        <Divider sx={{ marginBottom: "16px" }}>
          <Typography variant="h6" component="div" className="sectionTitle">
            Arcarum
          </Typography>
        </Divider>

        <FormGroup sx={{ paddingBottom: "16px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={bsc.settings.adjustment.enableArcarumAdjustment}
                onChange={e => {
                  bsc.setSettings({
                    ...bsc.settings,
                    adjustment: {
                      ...bsc.settings.adjustment,
                      enableArcarumAdjustment: e.target.checked,
                    },
                  });
                }}
              />
            }
            label="Enable Arcarum Adjustments"
          />
          <FormHelperText>Enable adjustment of tries for Arcarum Adjustments.</FormHelperText>
        </FormGroup>

        {bsc.settings.adjustment.enableArcarumAdjustment ? (
          <div>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Determining Which Action To Take"
                  value={bsc.settings.adjustment.adjustArcarumAction}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustArcarumAction: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for checking which action to take during Arcarum."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <TextField
                  label="Checking for Stage Effect during Combat"
                  value={bsc.settings.adjustment.adjustArcarumStageEffect}
                  onChange={e => {
                    bsc.setSettings({
                      ...bsc.settings,
                      adjustment: {
                        ...bsc.settings.adjustment,
                        adjustArcarumStageEffect: Number(e.target.value),
                      },
                    });
                  }}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 999 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">tries</InputAdornment>,
                  }}
                  helperText="Set the default number of tries for checking if there is an active stage effect popup at the start of Combat Mode."
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
              <Grid item xs={6} />
            </Grid>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <Fade in={true}>
      <Box className="adjustmentsContainer">
        <Stack className="adjustmentsWrapper">
          <div>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              color="text.secondary"
              sx={{ marginBottom: "16px" }}
            >
              Adjust the default number of tries for the following situations. On average for a 8c
              CPU and CUDA-compatible GPU with the bot using CUDA, a try takes about 0.175 seconds.
            </Typography>
          </div>

          {renderStart()}

          {renderGeneral()}

          {renderPendingBattles()}

          {renderCaptcha()}

          {renderSupportSummonSelection()}

          {renderCombatMode()}

          {renderArcarum()}
        </Stack>
      </Box>
    </Fade>
  );
};

export default Adjustments;
