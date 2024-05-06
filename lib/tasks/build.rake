desc "Build binaries"
task :build do |task|
  system('corepack enable') or exit 1
  system('yarn install') or exit 1
  system('yarn build') or exit 1
  system('rm -rf node_modules') or exit 1
  system('yarn install --production') or exit 1
end
