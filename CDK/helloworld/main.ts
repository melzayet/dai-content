import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AzurermProvider, VirtualNetwork } from "./.gen/providers/azurerm";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

      new AzurermProvider(this, "AzureRm", {
        features: [{}],
      });

      new VirtualNetwork(this, "TfVnet", {
        location: "uksouth",
        addressSpace: ["10.0.0.0/24"],
        name: "TerraformVNet",
        resourceGroupName: "dev-rg",
      });
  }


}

const app = new App();
new MyStack(app, "helloworld");
app.synth();
