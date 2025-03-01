#!/bin/bash

FORGE_VERSION="1.18.2-40.2.17"

# Ensure java is installed
if ! command -v java >/dev/null 2>&1; then
    echo "Java 17 must be installed"
    exit 1
fi

# Function to download with either curl or wget
download() {
    local url="$1"
    local output_path="$2"

    if command -v curl >/dev/null 2>&1; then
        if [ -z "$output_path" ]; then
            curl -OJL "$url"
        else
            # Create directory if it doesn't exist
            mkdir -p "$(dirname "$output_path")"
            curl -L "$url" -o "$output_path"
        fi
    else
        echo "curl not found. Please install curl."
        exit 1
    fi
}

# Install (Neo)Forge
if [ ! -f forge-$FORGE_VERSION-installer.jar ]; then

    # download "https://maven.neoforged.net/releases/net/neoforged/forge/$FORGE_VERSION/forge-$FORGE_VERSION-installer.jar"
    download "https://maven.minecraftforge.net/net/minecraftforge/forge/$FORGE_VERSION/forge-$FORGE_VERSION-installer.jar"
    java -jar forge-$FORGE_VERSION-installer.jar --installServer
    rm run.sh run.bat
fi

# These mods does not allow distribution on curseforge
mkdir -p mods
while IFS=$'\t' read -r url filename; do
  if [ $url == END ]; then
    break
  fi

  # Execute the download command
  download "$url" mods/$filename
done < manual_mods.list

# Install packwiz if needed
if [ ! -f packwiz-installer-bootstrap.jar ]; then
    download "https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar"
fi

java -jar packwiz-installer-bootstrap.jar -g -s server ../pack.toml

echo Use the following command to start the server
echo java @user_jvm_args.txt @libraries/net/minecraftforge/forge/$FORGE_VERSION/unix_args.txt nogui
