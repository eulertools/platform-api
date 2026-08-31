import { Duration, Stack, StackProps } from "aws-cdk-lib";
import * as path from "path";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export interface ConstructProps extends StackProps {
  functionName: string;
  description: string;
  restApiId: string;
}

export class NodeJsLambdaConstruct extends Construct {
  public readonly lambdaFunc: lambda.Function;
  constructor(stack: Stack, id: string, props?: ConstructProps) {
    super(stack, id);

    const { functionName, description, restApiId } = props!;

    const func = new NodejsFunction(
      this,
      `platform-apis-${functionName}-lambda-handler`,
      {
        functionName: `platform-apis-${functionName}-lambda-handler`,
        handler: "handler",
        description: description,
        entry: path.join(
          __dirname,
          `/../../src/platform-apis-handler/${functionName}.ts`
        ),
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: Duration.minutes(1),
      }
    );

    this.lambdaFunc = func;
  }
}
