# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.224.2/containers/typescript-node/.devcontainer/base.Dockerfile
ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}
WORKDIR /workspaces/tee.page
RUN mkdir -p node_modules && chown -R node:node node_modules
RUN mkdir -p .next && chown -R node:node .next
RUN su node -c "npm i -g typesync vercel && corepack prepare yarn@1.22.19 --activate"