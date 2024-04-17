import subprocess

def shutdown_wsl():
    try:
        subprocess.run(['wsl', '--shutdown'], check=True)
        print("WSL has been successfully shut down.")
    except subprocess.CalledProcessError as e:
        print("Error occurred while shutting down WSL:", e)

if __name__ == "__main__":
    shutdown_wsl()
