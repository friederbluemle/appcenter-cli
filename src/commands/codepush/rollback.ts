import { AppCommand, CommandArgs, CommandResult, help, failure, ErrorCodes, success, required, shortName, longName, hasArg, position, name } from "../../util/commandline";
import { MobileCenterClient, models, clientRequest } from "../../util/apis";
import { out, prompt } from "../../util/interaction";
import * as chalk from "chalk";
import { inspect } from "util";

const debug = require("debug")("mobile-center-cli:commands:codepush:rollback");

@help("Rollback a deployemnt to a previous release")
export default class CodePushRollbackCommand extends AppCommand {

  @help("Specifies deployment name to be rolled back")
  @required
  @name("deployment-name")
  @position(0)
  public deploymentName: string;

  @help("Specifies the release label to be rolled back")
  @longName("target-release")
  @hasArg
  public targetRelease: string;

  constructor(args: CommandArgs) {
    super(args);
  }

  async run(client: MobileCenterClient): Promise<CommandResult> {
    const app = this.app;

    if (!await prompt.confirm(`Do you really want to rollback release for deployment '${this.deploymentName}'?`)) {
      out.text(`Rollback of deployment '${this.deploymentName}' was cancelled`);
      return success();
    }

    try {
      debug("Rollback CodePush release");
      const httpRequest = await out.progress("Rollback CodePush release...", clientRequest<models.CodePushRelease>(
        (cb) => client.codePushDeploymentRelease.rollback(this.deploymentName, app.ownerName, app.appName, { label: this.targetRelease}, cb)));
    } catch (error){
      debug(`Failed to rollback CodePush release - ${inspect(error)}`);
      return failure(ErrorCodes.Exception, error.response.body);
    }

    out.text(`Successfully performed a rollback on the '${this.deploymentName}' deployment of the '${this.identifier}' app.`);  
    return success();
  }
}