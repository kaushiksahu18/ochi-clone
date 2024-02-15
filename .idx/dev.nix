# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  channel = "stable-23.11"; # "stable-23.11" or "unstable"
  # Use https://search.nixos.org/packages to  find packages
  packages = [
    # pkgs.python3
    # pkgs.go
    pkgs.nodejs
    pkgs.zsh
    pkgs.fish
    pkgs.starship
    pkgs.nerdfonts
    pkgs.fira-code
    pkgs.fira-code-nerdfont
  ];

  # Sets environment variables in the workspace
  env = { };
  # search for the extension on https://open-vsx.org/ and use "publisher.id"
  idx.extensions = [
    # "vscodevim.vim"
  ];
  # preview configuration, identical to monospace.json
  idx.previews = {
    enable = true;
    previews = [
      {
        # command = [ "npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0" ];
        command = ["npm" "run" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0"];
        manager = "web";
        id = "web";
      }
    ];
  };
}
