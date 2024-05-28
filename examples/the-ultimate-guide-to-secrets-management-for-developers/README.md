# The Ultimate Guide to Secrets Management for Developers 😎🔐

Hello, Developer Friend! Welcome to your exciting journey into the _mystical lands_ of Secrets Management. If you're the kind of person who thinks that `password123` is an unbreakable password, buckle up! We're about to revolutionize the way you handle secrets 🌟

## Table of Contents 📚

- [The Ultimate Guide to Secrets Management for Developers 😎🔐](#the-ultimate-guide-to-secrets-management-for-developers-)
  - [Table of Contents 📚](#table-of-contents-)
  - [Introduction to Secrets Management](#introduction-to-secrets-management)
  - [Where to Store Your Secrets](#where-to-store-your-secrets)
    - [Using Cloud Providers](#using-cloud-providers)
    - [Encrypting Files for Non-Cloud Environments](#encrypting-files-for-non-cloud-environments)
  - [Reading Secrets in Your Application](#reading-secrets-in-your-application)
    - [Avoiding `.env` for Sensitive Data](#avoiding-env-for-sensitive-data)
    - [Secure Alternatives](#secure-alternatives)
      - [Using `direnv` for Local Development](#using-direnv-for-local-development)
      - [Using `direnv` for Local Development](#using-direnv-for-local-development-1)
        - [Managing Different Stages with `direnv`](#managing-different-stages-with-direnv)
      - [Using `teller` for a Unified Approach](#using-teller-for-a-unified-approach)
      - [Using SDKs for Dynamic Retrieval](#using-sdks-for-dynamic-retrieval)
  - [Conclusion](#conclusion)

## Introduction to Secrets Management

Imagine your application's secrets as the precious ring from "The Lord of the Rings". You wouldn't just leave it lying around, would you? Secrets management is the art of storing, retrieving, and using these precious pieces of information securely. It's essential because the bad guys are always on the lookout, and you need to protect your treasure! 🐉

## Where to Store Your Secrets

First things first, where do you keep these shiny trinkets of data? You could write them on a sticky note, but that's not very safe, is it? Here's the pro gamer move:

### Using Cloud Providers

If you're sailing in the cloud, each provider has its own secret chest:

- **[AWS Parameters Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html) & [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)**: AWS's own treasure chest, perfect for all your secret-stashing needs.
- **[Google Cloud Secret Manager](https://cloud.google.com/security/products/secret-manager)**: Google's magic vault for keeping your spells and incantations safe.
- **[HashiCorp Vault](https://www.vaultproject.io/)**: For those wandering in the open plains outside the cloud, this is your enchanted vault.

### Encrypting Files for Non-Cloud Environments

Not on the cloud? No sweat! Here's the stealth mode:

1. **Encrypt config files**: Tools like [Secrets OPerationS (SOPS)](https://github.com/getsops/sops) are like your digital invisibility cloak, hiding your secrets in plain sight.
   ![SOPS Demo](https://camo.githubusercontent.com/9728792a3d7a222f606519c2b64a546fa1bb7e14bdb76f81bfc64088ffc4a27d/68747470733a2f2f692e696d6775722e636f6d2f5830544d354e492e676966)

2. **Key Management**: Keep the keys to your cloak in a vault like [LastPass](https://lastpass.com/) or [Bitwarden](https://bitwarden.com/), so only you know where and how to reveal the secrets.

## Reading Secrets in Your Application

Now that you've got your secrets stashed away like a dragon's hoard, how do you use them without exposing them to the prying eyes of the internet hobbits?

### Avoiding `.env` for Sensitive Data

`.env` files might seem convenient, but they're like leaving your front door key under the mat. Anyone who knows where to look can find it! So, let's move on to some magic spells for better security:

### Secure Alternatives

#### Using `direnv` for Local Development

`direnv` is like your trusty sidekick that whispers secrets to you and only you when you enter your castle (or project directory).

Instead of writing down your secrets, `direnv` can fetch them from AWS Parameter Store on the fly:

```shell
# .envrc example
export SUPER_STRONG_AND_COMPLICATED_PASSWORD=$(aws ssm get-parameter --name "SUPER_STRONG_AND_COMPLICATED_PASSWORD" --with-decryption --query "Parameter.Value" --output text)
```

📝 To set this up, you'll need `direnv` and `aws-cli` armed and ready. The official scrolls for `direnv` are here: [Direnv Documentation](https://direnv.net/docs/installation.html).

#### Using `direnv` for Local Development

`direnv` is like your trusty sidekick that whispers secrets to you and only you when you enter your castle (or project directory).

Instead of writing down your secrets, `direnv` can fetch them from AWS Parameter Store on the fly:

```shell
# .envrc example
export SUPER_STRONG_AND_COMPLICATED_PASSWORD=$(aws ssm get-parameter --name "SUPER_STRONG_AND_COMPLICATED_PASSWORD" --with-decryption --query "Parameter.Value" --output text)
```

📝 To set this up, you'll need `direnv` and `aws-cli` armed and ready. The official scrolls for `direnv` are here: [Direnv Documentation](https://direnv.net/docs/installation.html).

##### Managing Different Stages with `direnv`

If you’re a wizard of multiple realms (stages like `dev`, `staging`, `prod`), `direnv` can still be your arcane tool. Here's a spell to conjure the right environment based on your current stage:

<details>
<summary>🔮 Click to reveal the spell for managing different stages with `direnv`</summary>

1. Create a sacred grove of directories, each an altar for a different stage within your magical domain (project).

2. In each, place an `.envrc` script, inscribed with the incantations (variables) unique to that stage.

3. At the heart of your domain (`my-awesome-project`), place a master `.envrc` that will determine which altar to draw power from based on your current quest (branch, command, etc.).

Here's what your structure might look like:

```txt
my-awesome-project
├── .envrc
└── envs
    ├── dev
    │   └── .envrc
    ├── staging
    │   └── .envrc
    └── prod
        └── .envrc
```

And in your `my-awesome-project/.envrc`:

```sh
# .envrc in project root
show_env() {
  echo "Loading environment for $1..."
}

# Replace with a check or a command that determines the current stage.
STAGE=$(git branch --show-current)

case "$STAGE" in
  "main")
    source_env "envs/prod/.envrc"
    show_env "production"
    ;;
  "develop")
    source_env "envs/dev/.envrc"
    show_env "development"
    ;;
  "staging")
    source_env "envs/staging/.envrc"
    show_env "staging"
    ;;
  *)
    echo "Unknown environment. Not loading any .envrc files."
    ;;
esac
```

Cast `direnv allow` to let the magic flow whenever you update your scripts.

But remember, the most powerful spells (production secrets) should never be stored in plain text. Use secure vaults and encryption to keep them safe from dark sorcery (threats).

</details>

#### Using `teller` for a Unified Approach

Meet `teller`, the wandering wizard of secret managers. It pulls secrets from different realms (providers) into your local spellbook (environment).

![Teller Demo](https://github.com/tellerops/teller/blob/master/media/teller.gif)

To use `teller` for this example, you'd need to create a `teller.yml` file in your project directory with the following configuration:

```yaml
# teller.yml example
project: my-awesome-project

opts:
  region: env:AWS_REGION
  stage: development

confirm: Are you sure you want to run for {{stage}}?

providers:
  # Other providers configuration...

  aws_ssm:
    # configures client from environment:
    # https://docs.aws.amazon.com/sdk-for-go/api/service/secretsmanager/#SecretsManager.GetSecretValue
    env:
      SUPER_STRONG_AND_COMPLICATED_PASSWORD:
        path: /{{stage}}/my-awesome-project/SUPER_STRONG_AND_COMPLICATED_PASSWORD
        decrypt: true
```

🧙‍♂️ To conjure secrets with `teller`, you'll want to follow the ancient tomes: [Teller Documentation](https://github.com/tellerops/teller).

#### Using SDKs for Dynamic Retrieval

Most Cloud Providers offer SDKs for different languages, so you can weave your spells in your favorite tongue.

In our example, we'll use the AWS SDK for JavaScript to fetch a secret from AWS Parameter Store.

A snippet of incantation in Node.js:

```javascript
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-west-2" });
const ssm = new AWS.SSM({ apiVersion: "2014-11-06" });

const getSecret = async () => {
  const params = {
    Name: "SUPER_STRONG_AND_COMPLICATED_PASSWORD",
    WithDecryption: true,
  };
  const { Parameter } = await ssm.getParameter(params).promise();
  return Parameter.Value;
};

getSecret().then((password) => {
  console.log("Secret Password:", password);
});
```

📚 To learn this magic, visit the grand library here: [AWS SDK for JavaScript](https://docs.aws.amazon.com/sdk-for-javascript/index.html).

## Conclusion

Dear developer, keeping secrets isn't just for spies in movies. It's a critical part of our world. By using the right tools and spells, you can protect your application and sleep soundly, knowing your secrets are safe from the Dark Lords of the Web. 🛡️

May your code be secure and your coffee strong!

Happy coding, and may the force of security be with you! 🚀🔒
