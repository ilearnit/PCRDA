workflow "New workflow" {
  on = "push"
  resolves = ["Publish"]
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  secrets = ["GITHUB_TOKEN"]
}

action "Master" {
  needs = "Build"
  uses = "actions/bin/filter@master"
  args = "branch master-tmp"
}

action "Publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  secrets = ["GITHUB_TOKEN"]
}
